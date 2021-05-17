// @ts-check
import fooEdit from './fooEdit';
import fooBrowse from './microservice.foo.browse';
import fooDemo from './microservice.foo.demo';
import fooNew from './microservice.foo.new';
import fooOpen from './microservice.foo.open';

/** @type { import("../../handlers").handlerSet } */
export default function component() {
    return [
        () => ({ namespace: 'component/microservice' }),
        fooEdit,
        fooBrowse,
        fooDemo,
        fooNew,
        fooOpen
    ];
}
