// the automated server
"use strict";

/**
 * @module server
 * @exports expres
 * @exports morgan
 * @exports cors
 * @exports middleware
 */

const express = require("express");
const tripRoute = require("./routers/trip-rout");
const costumerRoute = require("./routers/costumerInfo-rout");
const app = express();

// global middleware
app.use(express.static("./public"));
app.use("/docs", express.static("./docs"));
app.use(express.json()); //body-parser to add body to the req

app.use("", tripRoute);
app.use("", costumerRoute);

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || 3000;
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
};