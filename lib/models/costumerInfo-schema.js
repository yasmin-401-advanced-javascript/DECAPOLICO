// COSTUMER INFORMATION SCHEMA
"use strict";
require("dotenv").config();
const mongoose = require("mongoose");

//THE SAME DATABASE FOR THE FORMS(SINGLE, FAMILY)
const costumerInfoSchema = mongoose.Schema({
    // both
    costumerName: { type: String, required: true },
    costumerPhoneNumber: { type: String, required: true },
    idImage: { type: String, required: true },
    //   +family
    familyBookImage: { type: String, required: true, default: "1" },
    familyMemeberNumber: { type: String, required: true, default: "1" },
    kidsLessThanFiveYears: { type: Boolean, required: false, default: false },
});

module.exports = mongoose.model("costumerInfoSchema", costumerInfoSchema);