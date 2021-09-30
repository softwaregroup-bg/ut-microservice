import { app } from 'ut-portal/storybook';
import core from 'ut-core/portal/prime';
import coreDropdown from 'ut-core/model/dropdown';
import customerDropdown from 'ut-customer/model/dropdown';

import microservice from './index';
import microserviceMock from './mock';
import fooMock from './fooMock';

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
    utMicroservice: true,
    utCore: true
}, {
    ...coreDropdown,
    ...customerDropdown,
    ...fooMock
}, [
    core(),
    microservice(),
    microserviceMock()
]);

export const FooBrowse = page('microservice.foo.browse');
export const FooDemo = page('microservice.foo.demo');
export const FooOpen = page('microservice.foo.open', 1);
export const FooNew = page('microservice.foo.new');
export const TreeBrowse = page('microservice.tree.browse');
export const TreeOpen = page('microservice.tree.open', 101);
export const TreeNew = page('microservice.tree.new');
export const TreeReport = page('microservice.tree.report', 'list');
