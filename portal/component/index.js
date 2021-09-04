import fooEdit from './fooEdit';
import fooBrowse from './microservice.foo.browse';
import fooDemo from './microservice.foo.demo';
import fooNew from './microservice.foo.new';
import fooOpen from './microservice.foo.open';
import objects from '../object';

/** @type { import("../../handlers").pageSet } */
export default function component({
    joi
}) {
    return [
        () => ({ namespace: 'component/microservice' }),
        ...objects(joi),
        fooEdit,
        fooBrowse,
        fooDemo,
        fooNew,
        fooOpen
    ];
}
