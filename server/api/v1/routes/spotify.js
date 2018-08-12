"use strict";
const router = require("express").Router();
const logger = require("winston");

const controller = require("./../controllers/spotify");

router.route("/")
    .get(controller.getCode);

router.route("/callback")
    .get(controller.getToken);

module.exports = router;
