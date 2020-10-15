// from here I make it work
"use strict";
require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./lib/server");
mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
server.start(process.env.PORT);