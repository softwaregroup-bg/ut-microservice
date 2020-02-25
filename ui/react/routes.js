import React from 'react';
import {Route, Switch} from 'react-router';
import FooList from './pages/foo/list';
import FooCreate from './pages/foo/create';
import {getLink} from 'ut-front-react/routerHelper';
import registerRoutes from './registerRoutes';
import {hot} from 'react-hot-loader';

registerRoutes();

export default hot(module)(({containerBusinessUnits}) =>
    <Switch>
        <Route exact path={getLink('ut-microservice:fooList')} component={FooList} />
        <Route
            exact path={getLink('ut-microservice:fooCreate')}
            component={props => <FooCreate BusinessUnits={containerBusinessUnits} {...props} />}
        />
    </Switch>
);
