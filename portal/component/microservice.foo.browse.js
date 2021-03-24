// @ts-check
import React from 'react';
import Explorer from 'ut-front-devextreme/core/Explorer';
import Navigator from 'ut-front-devextreme/core/Navigator';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        customerOrganizationFetch,
        customerOrganizationGraphFetch
    }
}) => ({
    'microservice.foo.browse': () => ({
        title: 'Foo list',
        permission: 'microservice.foo.browse',
        component: async() => {
            const fields = [{
                dataField: 'organizationName',
                caption: 'Name'
            }, {
                dataField: 'parents',
                caption: 'Parents'
            }, {
                dataField: 'statusId',
                caption: 'Status'
            }, {
                dataField: 'isEnabled',
                caption: 'Enabled'
            }];
            const details = {organizationName: 'Organization', statusId: 'Status'};
            return function FooBrowse() {
                return (
                    <Explorer
                        fetch={customerOrganizationFetch}
                        keyField='actorId'
                        resultSet='organization'
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
