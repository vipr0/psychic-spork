import confme from 'confme';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const config = confme(`${__dirname}/../configs/config.json`);

export default config;
