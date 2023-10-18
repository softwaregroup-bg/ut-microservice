import backend from './backend';
import component from './component';
import handle from './handle';
import config from './config';

export default () => function utMicroservice() {
    return {
        config,
        browser: () => [
            backend,
            ...component,
            handle
        ]
    };
};
