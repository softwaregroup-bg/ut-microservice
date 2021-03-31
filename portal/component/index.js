// @ts-check
import fooBrowse from './microservice.foo.browse';
import fooDemo from './microservice.foo.demo';
import fooOpen from './microservice.foo.open';

/** @type { import("../../handlers").handlerSet } */
export default function component() {
    return [
        () => ({ namespace: 'component/microservice' }),
        fooBrowse,
        fooDemo,
        fooOpen
    ];
}
