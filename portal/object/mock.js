import chisel from 'ut-portal/chisel';
import {customerDropdown} from 'ut-customer/portal/object/mock';

import {tree, treeMock} from './tree';
import {fooMock} from './foo';

export const microserviceDropdown = {
    'microservice.dropdown.list': () => ({
        'microservice.foo': [
            {value: 'foo 1', label: 'item 1'},
            {value: 'foo 2', label: 'item 2'}
        ]
    })
};

export default () => [
    [tree, treeMock]
].reduce((prev, [object, mock]) => ({...prev, ...chisel(object instanceof Function && object()).mock(mock)}), {
    ...customerDropdown,
    ...fooMock,
    ...microserviceDropdown
});
