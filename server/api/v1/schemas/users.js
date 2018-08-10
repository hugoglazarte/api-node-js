"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
}, {
    timestamps: true
    /*timestamps que automáticamente creará las
    propiedades createdAt y updatedAt para actualizar
    las fechas en que estas operaciones se den
    respectivamente*/
});

module.exports = mongoose.model("user", UserSchema);
