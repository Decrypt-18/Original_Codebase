// Library
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const bodyParser = require("body-parser");
const exec = require("child_process").exec;
const execSync = require("child_process").execSync;
const fs = require("fs");
const cors = require("cors");
const expressWinston = require("express-winston");
const winstonLogger = require("./winston-logger-init");
const uuidv4 = require("uuid").v4;
const morganLogger = require("morgan");
const lessMiddleware = require("less-middleware");
const packageJson = require("./package.json");
const configCors = require("./config/cors-config");
const configCsrf = require("./config/csrf-config");
const configCompression = require("./config/compression-config.js");
require("supports-color");

winstonLogger.info("Initializing logger...");

/**
 * Environment vars
 */
const EXPRESS_HTTP_PORT = process.env.PORT || "3000";

/**
 * Express App init
 */
const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//set up express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(lessMiddleware(path.join(__dirname, "public")));
// app.use(morganLogger("dev"));

/**
 * Static router
 */
app.use(express.static("./static/public"));

// Trust proxy
if (process.env.APP_ENV !== "localhost") {
  app.set("trust proxy", true); // trust first proxy
}

// show the api version in every request
app.use(function (req, res, next) {
  res.setHeader("X-API-VERSION", packageJson.version);
  res.setHeader("X-REQUEST-ID", uuidv4());
  next();
});

// express-winston logger makes sense BEFORE the router
// app.use(
//   expressWinston.logger({
//     winstonInstance: winstonLogger,
//     meta: true,
//     dynamicMeta: function (req, res) {
//       return {
//         ipAddress: req.ip,
//       };
//     },
//   })
// );

/**
 * CORS OPTION
 */
configCors(app);

/**
 * COMPRESSION CONFIG
 * type: gzip
 */
configCompression(app);

/**
 * Routers
 */
const router = express.Router();
app.use("/", router);
require("./router.js")(router);

/**
 * Exception catcher
 */
// express-winston errorLogger makes sense AFTER the router.
// app.use(expressWinston.errorLogger({
//     winstonInstance: winstonLogger,
//     meta: true,
//     dynamicMeta: function (req, res) {
//         return {
//             'ipAddress': req.headers['x-forwarded-for'] || req.connection.remoteAddress
//         }
//     }
// }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/**
 * HTTP server listening
 */
app
  .listen(EXPRESS_HTTP_PORT)
  .once("error", function (err) {
    if (err.code === "EADDRINUSE") {
      console.log("Cannot use this port:" + EXPRESS_HTTP_PORT + ":" + err.code);
      process.exit(-1);
    }
  })
  .once("listening", function () {
    console.log("Start listening " + EXPRESS_HTTP_PORT + " ... ");
  });

process.on("unhandledRejection", (r) => console.log(r));
