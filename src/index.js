console.clear()
const _ = require("lodash");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const requestLogger = require("node-tools/lib/middleware/request-logger");
const routes = require("node-tools/lib/middleware/routes")
//const session = require("express-session");

const app = express();

var port = 8000
const listener = app.listen(port, () => {
	console.log("Server started at http://localhost:" + listener.address().port);
});


const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.use("/api/v0", routes(path.join(__dirname, "routes")));

router.use(require("./url-router"))


router.use(function errorHandler(error, request, response, next) {
    console.error("error", _.pick(error, ["name", "message", "error"]));
    return response.status(error.status || 500).json(_.pick(error, ["name", "message", "error"]));
})

const basePath = process.env.BASE_PATH || "/";
app.use(basePath, router);

//var PORT = 8000
//app.listen(PORT, function() {
//    console.log("Server started at http://localhost:" + PORT);
//})


process.on("uncaughtException", error => {
    console.error(error);
    process.exit(1); // not optional
});
