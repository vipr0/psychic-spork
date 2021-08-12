import axios           from 'axios';
import { ServiceBase } from '../modules.js';
import config          from '../config.js';

const { appPort, appHost, apiPrefix } = config;

export default class GetAuction extends ServiceBase {
    static validationRules = {
        ip:         ['required', 'ip'], 
        ua:         ['string'], 
        partner_id: ['uuid']
    };

    async execute({ ip }) {
        const requestUrl = `${appHost}:${appPort}${apiPrefix}/bidder`;

        const requests = await Promise.all([
            axios.get(requestUrl, { params: { ip } }), 
            axios.get(requestUrl, { params: { ip } }), 
            axios.get(requestUrl, { params: { ip } })
        ])

        const max = requests.reduce((max, request) => request.data.data.bid > max.data.data.bid ? request : max, requests[0])

        return {
            url: max.data.data.url
        };
    }
}
