import { ServiceBase } from '../modules.js';
import { generateNumber, generateUrl } from '../utils/randomUtils.js';

export default class GetBidder extends ServiceBase {
    static validationRules = {
        ip: ['required', 'string'],
        ua: ['string']
    };

    async execute() {
        return {
            data : {
                bid: generateNumber(),
                url: generateUrl(),
            }
        };
    }
}
