import chisel from 'ut-portal/chisel';

import {tree} from './tree';

export default joi => [
    tree
]
    .map(object => chisel(object(joi)).components())
    .flat();
