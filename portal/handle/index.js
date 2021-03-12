// @ts-check
import fooClick from './microservice.foo.click';

/** @type { import("../../handlers").handlerSet } */
export default function handle() {
    return [
        () => ({ namespace: 'handle/microservice' }),
        fooClick
    ];
};
