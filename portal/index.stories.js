import { app } from 'ut-portal/storybook';
import core from 'ut-core/portal';
import coreDropdown from 'ut-core/model/dropdown';
import customerDropdown from 'ut-customer/model/dropdown';

import microservice from './index';
import microserviceMock from './mock';
import microserviceDropdown from '../model/dropdown';
import fooMock from './fooMock';

export default {
    title: 'Microservice'
};

const page = app({
    implementation: 'microservice',
    utMicroservice: true,
    utCore: true
}, {
    ...coreDropdown,
    ...customerDropdown,
    ...microserviceDropdown,
    ...fooMock
}, [
    core(),
    microservice(),
    microserviceMock()
]);

export const DocumentNew = page('microservice.document.new');
export const FooBrowse = page('microservice.foo.browse');
export const FooDemo = page('microservice.foo.demo');
export const FooOpen = page('microservice.foo.open', 1);
export const FooNew = page('microservice.foo.new');
export const BarBrowse = page('microservice.bar.browse');
export const BarOpen = page('microservice.bar.open', 1);
export const BarNew = page('microservice.bar.new');
export const BarReport = page('microservice.bar.report', 'list');
export const PageCardsNew = page('p/microservice.page.cards');
export const PageCardsOpen = page('p/microservice.page.cards', 1);
export const PageCustomNew = page('p/microservice.page.custom');
export const PageCustomOpen = page('p/microservice.page.custom', 1);
