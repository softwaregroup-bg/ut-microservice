// @ts-check
import React from 'react';
import Explorer from 'ut-front-devextreme/core/Explorer';
import Navigator from 'ut-front-devextreme/core/Navigator';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        microserviceFooFetch,
        microserviceFooDelete,
        handleTabShow,
        component$microserviceFooOpen,
        component$microserviceFooNew,
        customerOrganizationGraphFetch
    }
}) => ({
    'microservice.foo.browse': () => ({
        title: 'Foo list',
        permission: 'microservice.foo.browse',
        component: async() => {
            const fields = [{
                field: 'color',
                title: 'Foo color',
                filter: true,
                action: ({id}) => handleTabShow([component$microserviceFooOpen, {id}])
            }];
            const details = {color: 'Foo color'};
            return function FooBrowse() {
                const [tenant, setTenant] = React.useState(null);
                return (
                    <Explorer
                        fetch={tenant != null && microserviceFooFetch}
                        keyField='fooId'
                        fields={fields}
                        details={details}
                        filter={{tenant}}
                        actions={[{
                            title: 'Create',
                            permission: 'microservice.foo.add',
                            action: () => handleTabShow(component$microserviceFooNew)
                        }, {
                            title: 'Edit',
                            permission: 'microservice.foo.edit',
                            enabled: 'current',
                            action: ({id}) => handleTabShow([component$microserviceFooOpen, {id}])
                        }, {
                            title: 'Delete',
                            enabled: 'selected',
                            action: ({selected}) => microserviceFooDelete(selected)
                        }]}
                    >
                        <Navigator
                            fetch={customerOrganizationGraphFetch}
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
