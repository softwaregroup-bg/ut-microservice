const fooList = [
    {tenant: 100, fooId: 1, color: 'red'},
    {tenant: 100, fooId: 2, color: 'green'},
    {tenant: 300, fooId: 3, color: 'blue'},
    {tenant: 300, fooId: 4, color: 'black'}
];

let lastFooId = fooList.reduce((max, {fooId}) => Math.max(max, fooId), 0);
const byKey = filter => ({fooId}) => String(fooId) === String(filter.fooId);
const findFoo = filter => fooList.find(byKey(filter));

export const fooMock = {
    'microservice.foo.fetch': ({filterBy: {tenant}}) => fooList.filter(foo => tenant == null || String(foo.tenant) === String(tenant)),
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
};
