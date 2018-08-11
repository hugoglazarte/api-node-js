"use strict";

const router = require("express").Router();

const controller = require("./../controllers/categories");

/*
 * /api/categories/     GET    - READ ALL
 * /api/categories/     POST   - CREATE
 * /api/categories/:id  GET    - READ ONE
 * /api/categories/:id  PUT    - UPDATE
 * /api/categories/:id  DELETE - DELETE
 */

router.route("/")
    .get(controller.all)
    .post(controller.post);

// middleware para capturar id via url
router.param("id", controller.params);

router.route("/:id")
    .get(controller.get)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;
