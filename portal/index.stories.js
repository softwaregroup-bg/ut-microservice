import {app} from 'ut-portal/storybook';
import portal from './';
import chisel from 'ut-portal/chisel';
import fooMock from './mock/foo';

export default {
    title: 'Microservice'
};

const page = app({
    implementation: 'microservice',
    utMicroservice: true,
    utCore: true
}, {
    'core.translation.fetch': () => ({}),
    'customer.organization.graphFetch': () => ({
        organization: [
            {id: 100, title: 'Africa'},
            {id: 300, title: 'Asia'},
            {id: 400, title: 'Australia'},
            {id: 500, title: 'Europe'},
            {id: 600, title: 'North America'},
            {id: 700, title: 'South America'},
            {id: 101, parents: 100, title: 'Egypt'},
            {id: 102, parents: 100, title: 'Kenya'},
            {id: 103, parents: 100, title: 'Ghana'},
            {id: 104, parents: 100, title: 'Nigeria'},
            {id: 301, parents: 300, title: 'Philippines'},
            {id: 302, parents: 300, title: 'India'},
            {id: 501, parents: 500, title: 'Bulgaria'},
            {id: 601, parents: 600, title: 'USA'},
            {id: 701, parents: 700, title: 'Mexico'}
        ]
    }),
    ...fooMock,
    ...chisel({subject: 'microservice', object: 'tree'}).mock()
}, [
    portal()
]);

export const FooBrowse = page('microservice.foo.browse');
export const FooDemo = page('microservice.foo.demo');
export const FooOpen = page('microservice.foo.open', 1);
export const FooNew = page('microservice.foo.new');
export const TreeBrowse = page('microservice.tree.browse');
export const TreeOpen = page('microservice.tree.open', 101);
export const TreeNew = page('microservice.tree.new');
