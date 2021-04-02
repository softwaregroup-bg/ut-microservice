import {app} from 'ut-portal/storybook';
import portal from './';

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
        organization: [{
            id: 1,
            title: 'Organization 1'
        }, {
            id: 2,
            title: 'Organization 2'
        }, {
            id: 1001,
            parents: 1,
            title: 'Business unit 1'
        }, {
            id: 1002,
            parents: 1,
            title: 'Business unit 2'
        }]
    }),
    'microservice.foo.fetch': () => [{
        fooId: 1,
        color: 'red'
    }, {
        fooId: 2,
        color: 'green'
    }, {
        fooId: 3,
        color: 'blue'
    }, {
        fooId: 4,
        color: 'black'
    }]
}, [
    portal()
]);

export const FooBrowse = page('microservice.foo.browse');
export const FooDemo = page('microservice.foo.demo');
export const FooOpen = page('microservice.foo.open');
