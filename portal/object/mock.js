import chisel from 'ut-portal/chisel';

import {tree, treeMock} from './tree';
import {fooMock} from './foo';

export default () => [
    [tree, treeMock]
].reduce((prev, [object, mock]) => ({...prev, ...chisel(object()).mock(mock)}), {
    ...fooMock
});
