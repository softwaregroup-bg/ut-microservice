import React from 'react';
import reducer from './reducers';
import StandardRoutes from './routes';

export function ui({utMethod}) {
    return {
        reducer: () => reducer,
        route: async() => {
            let containerBusinessUnits = await utMethod('container.BusinessUnits')({});
            return <StandardRoutes key='utStandard' containerBusinessUnits={containerBusinessUnits} />;
        }
    };
};
