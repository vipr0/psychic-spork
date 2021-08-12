import ChistaModule     from 'chista';
import * as chistaUtils from './chistaUtils.js';

function getLogger() {
    return (type, data) => console[type](data);
}

const serviceRunner = new ChistaModule.default({
    defaultLogger : getLogger()
});
serviceRunner.createServiceRunner = chistaUtils.createServiceRunner;

export default serviceRunner;
