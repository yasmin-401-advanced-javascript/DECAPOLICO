"use strict";

require("dotenv").config();

const mongoose = require("mongoose");

// ADMIN
const trips = mongoose.Schema({
    tripPlace: { type: String, required: true },
    tripPeriod: { type: String, required: true },
    hotelRate: { type: String, required: true },
    pricePerPerson: { type: String, required: true },
    foodIncluded: { type: Boolean, default: false },
    ticketsIncluded: { type: Boolean, default: false },
    transportIncluded: { type: Boolean, default: false },
    freeTripsIncluded: { type: Boolean, default: false },
    expired: { type: Boolean, default: false, required: true }
});
module.exports = mongoose.model("trips", trips);
