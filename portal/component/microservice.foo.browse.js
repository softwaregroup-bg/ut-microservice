import React from 'react';
import Explorer from 'ut-prime/core/Explorer';
import Navigator from 'ut-prime/core/Navigator';

/** @type { import("../../handlers").pageFactory } */
export default ({
    import: {
        microserviceFooFetch,
        microserviceFooDelete,
        handleTabShow,
        component$microserviceFooOpen,
        component$microserviceFooNew,
        customerOrganizationGraphFetch
    },
    utMeta
}) => ({
    'microservice.foo.browse': () => ({
        title: 'Foo list',
        permission: 'microservice.foo.browse',
        component: async() => {
            const properties = {
                color: {
                    title: 'Foo color',
                    action: ({id}) => handleTabShow([component$microserviceFooOpen, {id}], utMeta())
                }
            };
            const columns = ['color'];
            const details = {color: 'Foo color'};
            const explorerFetch = params => microserviceFooFetch(params, utMeta());
            const navigatorFetch = params => customerOrganizationGraphFetch(params, utMeta());
            return function FooBrowse() {
                const [tenant, setTenant] = React.useState(null);
                return (
                    <Explorer
                        fetch={tenant != null && explorerFetch}
                        keyField='fooId'
                        schema={{properties}}
                        columns={columns}
                        details={details}
                        filter={{tenant}}
                        toolbar={[{
                            title: 'Create',
                            permission: 'microservice.foo.add',
                            action: () => handleTabShow(component$microserviceFooNew, utMeta())
                        }, {
                            title: 'Edit',
                            permission: 'microservice.foo.edit',
                            enabled: 'current',
                            action: ({id}) => handleTabShow([component$microserviceFooOpen, {id}], utMeta())
                        }, {
                            title: 'Delete',
                            enabled: 'selected',
                            action: ({selected}) => microserviceFooDelete(selected, utMeta())
                        }]}
                    >
                        <Navigator
                            fetch={navigatorFetch}
                            onSelect={setTenant}
                            keyField='id'
                            field='title'
                            title='Tenant'
                            resultSet='organization'
                        />
                    </Explorer>
                );
            };
        }
    })
});
