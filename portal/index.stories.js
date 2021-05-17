import {app} from 'ut-portal/storybook';
import portal from './';

export default {
    title: 'Microservice'
};

const fooList = [{
    tenant: 1,
    fooId: 1,
    color: 'red'
}, {
    tenant: 1,
    fooId: 2,
    color: 'green'
}, {
    tenant: 1001,
    fooId: 3,
    color: 'blue'
}, {
    tenant: 1002,
    fooId: 4,
    color: 'black'
}];

let lastFooId = fooList.reduce((max, {fooId}) => Math.max(max, fooId), 0);
const byKey = filter => ({fooId}) => String(fooId) === String(filter.fooId);
const findFoo = filter => fooList.find(byKey(filter));

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
            title: 'Office 1'
        }, {
            id: 1002,
            parents: 1,
            title: 'Office 2'
        }]
    }),
    'microservice.foo.fetch': ({tenant}) => fooList.filter((foo) => tenant == null || foo.tenant === tenant),
    'microservice.foo.get': findFoo,
    'microservice.foo.add': foo => {
        const result = {...foo, tenant: 1, fooId: ++lastFooId};
        fooList.push(result);
        return result;
    },
    'microservice.foo.edit': edited => {
        const result = findFoo({fooId: edited.fooId});
        return result && Object.assign(result, edited);
    },
    'microservice.foo.delete': deleted => {
        const result = [];
        for (const item of deleted) {
            const found = fooList.findIndex(byKey({fooId: item.fooId}));
            result.push(found >= 0 ? result[found] : null);
            if (found >= 0) fooList.splice(found, 1);
        }
        return result;
    }
}, [
    portal()
]);

export const FooBrowse = page('microservice.foo.browse');
export const FooDemo = page('microservice.foo.demo');
export const FooOpen = page('microservice.foo.open', 1);
export const FooNew = page('microservice.foo.new');
