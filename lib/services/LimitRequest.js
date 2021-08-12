import { ServiceBase, Exception }  from '../modules.js';
import * as redisClient from '../utils/redisUtils.js';

export default class LimitRequest extends ServiceBase {
    static validationRules = {
        ip: ['required', 'string'],
    };

    async execute({ ip }) {
        const requestsPerIp = await redisClient.get(ip);

        if(!requestsPerIp) await redisClient.set(ip, 0);

        await redisClient.incr(ip);

        if(requestsPerIp >= 3 ) throw new Exception({ 
            code: `Too many requests from this ip: ${ip}`,
            fields: { ip: 'MANY_REQUESTS' }
        })
    }
}
