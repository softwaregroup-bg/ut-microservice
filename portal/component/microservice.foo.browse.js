// @ts-check
import React from 'react';
import Explorer from 'ut-front-devextreme/core/Explorer';
import Navigator from 'ut-front-devextreme/core/Navigator';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        microserviceFooFetch,
        customerOrganizationGraphFetch
    }
}) => ({
    'microservice.foo.browse': () => ({
        title: 'Foo list',
        permission: 'microservice.foo.browse',
        component: async() => {
            const fields = [{
                dataField: 'fooId',
                caption: 'ID'
            }, {
                dataField: 'color',
                caption: 'Foo color'
            }];
            const details = {color: 'Foo color'};
            return function FooBrowse() {
                return (
                    <Explorer
                        fetch={microserviceFooFetch}
                        keyField='fooId'
                        fields={fields}
                        details={details}
                    >
                        <Navigator
                            fetch={customerOrganizationGraphFetch}
                            keyField='id'
                            field='title'
                            title='Business unit'
                            resultSet='organization'
                        />
                    </Explorer>
                );
            };
        }
    })
});
