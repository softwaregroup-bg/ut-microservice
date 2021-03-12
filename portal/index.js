// @ts-check
import component from './component';
import handle from './handle';

export default () => function utMicroservice() {
    return {
        browser: () => [
            component,
            handle
        ]
    };
};
