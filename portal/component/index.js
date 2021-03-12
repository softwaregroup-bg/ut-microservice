// @ts-check
import navigationGet from './microservice.navigation.get';
import fooBrowse from './microservice.foo.browse';
import fooDemo from './microservice.foo.demo';
import fooOpen from './microservice.foo.open';

/** @type { import("../../handlers").handlerSet } */
export default function component() {
    return [
        () => ({ namespace: 'component/microservice' }),
        navigationGet,
        fooBrowse,
        fooDemo,
        fooOpen
    ];
};
