import chisel from 'ut-portal/chisel';

import model from '../model';
import mock from '../model/mock';

export default () => function utMicroservice() {
    return chisel.backendMock(model, () => mock);
};
