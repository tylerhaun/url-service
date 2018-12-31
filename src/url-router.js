import UrlController from "./controllers/url";
import ClickController from "./controllers/click";

const bluebird = require("bluebird");
const express = require("express");


const router = express.Router();


router.use(function urlRouter(request, response, next) {

    return bluebird.resolve().then(async () => {

        console.log("urlRouter", request);
        console.log("urlRouter", request.path);

        const urlController = new UrlController();

        const path = request.path.slice(1);
        const urls = await urlController.find({path})
        const url = urls[0];
        console.log("url", url);

        //return response.json(url);
        return response.redirect(url.url);

    }).catch(next);

})

module.exports = router;
