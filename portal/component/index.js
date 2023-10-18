import {component} from 'ut-model';

import fooEdit from './fooEdit.jsx';
import fooBrowse from './microservice.foo.browse.jsx';
import fooDemo from './microservice.foo.demo.jsx';
import fooNew from './microservice.foo.new';
import fooOpen from './microservice.foo.open';
import pageCards from './microservice.page.cards.jsx';
import pageCustom from './microservice.page.custom.jsx';
import model from '../../model';

/** @type { import("../../handlers").handlerSet[] } */
export default component(model, [
    pageCards,
    pageCustom,
    fooEdit,
    fooBrowse,
    fooDemo,
    fooNew,
    fooOpen
]);
