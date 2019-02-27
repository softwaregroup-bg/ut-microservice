import { registerRoute } from 'ut-front-react/routerHelper';

export default () => {
    let mainRoute = 'ut-standard:home';
    registerRoute(mainRoute).path('/foo');
    registerRoute('ut-standard:fooList').path('list').parent(mainRoute);
    registerRoute('ut-standard:fooCreate').path('create').parent(mainRoute);
    return mainRoute;
};
