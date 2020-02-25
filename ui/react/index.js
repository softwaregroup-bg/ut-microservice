import React from 'react';
import reducer from './reducers';
import Routes from './routes';

export function ui({utMethod}) {
    return {
        reducer: () => reducer,
        route: async() => {
            const containerBusinessUnits = await utMethod('container.BusinessUnits')({});
            return <Routes key='utMicroservice' containerBusinessUnits={containerBusinessUnits} />;
        }
    };
};
