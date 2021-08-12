import { Exception } from '../modules.js';
import chista    from './serviceRunner.js';

export function createServiceRunner(
    useCaseClass,
    paramsBuilder  = chista.defaultParamsBuilder,
    render         = renderPromiseAsJson
) {
    return async function useCaseRunner(req, res, next) {
        const resultPromise = new useCaseClass({ context: {} }).run(paramsBuilder(req, res));

        return render(req, res, resultPromise, next);
    };
}

export async function renderPromiseAsJson(req, res, promise) {
    try {
        const data = await promise;

        data.status = 1;

        return res.send(data);
    } catch (error) {
        if (error instanceof Exception) {
            res.send({
                status : 0,
                error  : error.toHash()
            });
        } else {
            console.log(error);

            res.send({
                status : 0,
                error  : {
                    code    : 'SERVER_ERROR',
                    message : 'Please, contact your system administartor!'
                }
            });
        }
    }
}
