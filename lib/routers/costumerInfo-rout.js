"use strict";
const express = require("express");
const router = express.Router();
const tripModel = require("../models/costumerInfo-schema");
router.post("/costumerInfo", costumerInfo);
// router.put("/trip/:id", updateTrips);
router.get("/allTrips", getAllCostumerInfo);
// =================================================================
//HANDLERS:

/////// COSTUMER INFORMATION
function getAllCostumerInfo(req, res, next) {
    tripModel
        .get()
        .then((data) => {
            console.log("GET", data);
            res.json(data);
        })
        .catch((err) => next(err.message));
}

/////// CREATE INFO BY COSTUMER
function costumerInfo(req, res, next) {
    tripModel
        .create(req.body)
        .then((data) => {
            console.log("POST", data);
            res.json(data);
        })
        .catch((err) => next(err.message));
}

module.exports = router;