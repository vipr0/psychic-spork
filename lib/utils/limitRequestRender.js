export async function limitRequestRender(req, res, promise, next, logger) {
    try {
        await promise;
    } catch (e) {
        return res.send('')
    }

    return next();
}
