import {app} from 'ut-portal/storybook';
import portal from './';
import chisel from 'ut-portal/chisel';
import fooMock from './mock/foo';

export default {
    title: 'Microservice'
};

const page = app({
    implementation: 'microservice',
    utBrowser: {
        backend: {
            url: 'https://localhost:4006'
        }
    },
    // preauth: {
    //     backend: {
    //         authorization: 'Bearer ...'
    //     }
    // },
    utMicroservice: true,
    utCore: true
}, {
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
