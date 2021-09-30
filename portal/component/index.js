import chisel from 'ut-portal/chisel';

import fooEdit from './fooEdit';
import fooBrowse from './microservice.foo.browse';
import fooDemo from './microservice.foo.demo';
import fooNew from './microservice.foo.new';
import fooOpen from './microservice.foo.open';
import model from '../../model';

/** @type { import("../../handlers").pageSet } */
export default chisel.component(model, [
    () => ({ namespace: 'component/microservice' }),
    fooEdit,
    fooBrowse,
    fooDemo,
    fooNew,
    fooOpen
]);
