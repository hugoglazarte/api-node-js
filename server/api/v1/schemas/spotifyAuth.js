"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    code: {
        type: String
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model("spotify", UserSchema);
