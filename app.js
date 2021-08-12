import express from 'express';
import router  from './lib/router.js';
import config from './lib/config.js';

import './lib/registerValidationRules.js';

const { appPort } = config;
const app = express();

app.use('/api', router);

export function start({ appPort = 8000 } = {}) {
    app.listen(appPort, () => {
        console.log(`App is up and running on port: ${appPort}`);
    })
}

start({ appPort });