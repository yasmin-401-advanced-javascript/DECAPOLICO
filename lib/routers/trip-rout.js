"use strict";
const express = require("express");
const router = express.Router();
const tripModel = require("../models/trip-model.js");
router.post("/addTrip", tripAvailability);
router.put("/trip/:id", updateTrips);
router.get("/allTrips", showAllTrips);
// =================================================================
//HANDLERS:

/////// SHOW ALL trip
function showAllTrips(req, res, next) {
    tripModel
        .getAllTrips()
        .then((data) => {
            console.log("GET", data);
            res.json(data);
        })
        .catch((err) => next(err.message));
}

/////// trip CATEGORIES/ CREATE TRIP BY ADMIN
function tripAvailability(req, res, next) {
    tripModel
        .create(req.body)
        .then((data) => {
            console.log("POST", data);
            res.json(data);
        })
        .catch((err) => next(err.message));
}

/////// UPDATE trip by ADMIN
async function updateTrips(req, res, next) {
    try {
        let trip = await tripModel.get(req.params.id);
        console.log("update", trip);

        let newtrip = {
            expired: req.body.expired,
        };

        tripModel
            .update(req.params.id, newtrip)
            .then((data) => res.json(data))
            .catch((err) => next(err.message));
    } catch (e) {
        next(e);
    }
}

module.exports = router;