import {backendMock} from 'ut-model';

import model from '../model';
import mock from '../model/mock';
import api from '../system/api/microservice/swagger.json';

export default () => function utMicroservice() {
    return backendMock(model, () => mock, api);
};
