// @ts-check
import component from './component';
import handle from './handle';

export default () => function utMicroservice() {
    return {
        config: require('./config'),
        browser: () => [
            component,
            handle
        ]
    };
};
