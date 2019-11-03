import { registerRoute } from 'ut-front-react/routerHelper';

export default () => {
    let mainRoute = 'ut-microservice:home';
    registerRoute(mainRoute).path('/foo');
    registerRoute('ut-microservice:fooList').path('list').parent(mainRoute);
    registerRoute('ut-microservice:fooCreate').path('create').parent(mainRoute);
    return mainRoute;
};
