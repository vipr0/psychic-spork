import { renderPromiseAsJson } from './chistaUtils.js';

export async function redirectRender(req, res, promise, next, logger) {
    try {
        const { url } = await promise;

        return res.redirect(302, url);
    } catch (e) {
        return renderPromiseAsJson(req, res, promise, next, logger);
    }
}
