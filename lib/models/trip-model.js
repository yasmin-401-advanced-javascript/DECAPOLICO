// what the user see (COSTUMAIZED model)
"use strict";
const schema = require("./trip-schema");
const Model = require("./model.js");
class trips extends Model {
    constructor() {
        super(schema);
    }
    async getOneTrip(_id) {
        const queryObject = { deleted: false, status: "accepted", _id };
        console.log("getdbonepost------>", _id, queryObject);
        return (await this.schema.find(queryObject))[0];
    }
    getAllTrips() {
        const queryObject = { expired: false };
        return this.schema.find(queryObject);
    }
}
module.exports = new trips();