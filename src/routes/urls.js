import UrlController from "../controllers/url";
import _ from "lodash";
import bluebird from "bluebird";
import {createPaginationParams} from "../utils/pagination";

const urlController = new UrlController();

module.exports = function(router, route) {

    router.route(route)
        .get(function main(request, response, next) {

            bluebird.resolve().then(async () => {

                const paginationParams = createPaginationParams(request);

                const urls = await urlController.find()
                return response.json({urls});
                
            })

        })
        .post(function main(request, response, next) {

            bluebird.resolve().then(async () => {

                const data = _.pick(request.body, ["url", "path"]);
                Object.assign(data, {status: "active"})
                const url = await urlController.create(data);

                return response.json({url});
                
            })
        
        })

}

