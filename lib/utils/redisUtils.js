import redis  from 'redis';
import config from '../config.js';
import { promisify } from 'util';

const { redisHost, redisPort } = config;
const client = redis.createClient({ host: redisHost, port: redisPort });

client.on("error", function(error) {
    throw new Error(error);
});

const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);
const incr = promisify(client.incr).bind(client);

export { client, get, set, incr }