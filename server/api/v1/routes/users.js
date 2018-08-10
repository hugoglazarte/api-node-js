"use strict";
const router = require("express").Router();
const logger = require("winston");

// router.get("/", (req, res, next) => {
//     logger.info("Get all Users");
//     res.json({
//       "message": "Get all Users"
//     });
//   });

/*
 * /api/users/     GET    - READ ALL
 * /api/users/     POST   - CREATE
 * /api/users/:id  GET    - READ ONE
 * /api/users/:id  PUT    - UPDATE
 * /api/users/:id  DELETE - DELETE
 */
const controller = require("./../controllers/users");

// si existe el parametro "id" en la ruta, usamos el controlador params.
router.param("id", controller.params);

router.route("/")
    .get(controller.all)
    .post(controller.post);

router.route("/:id")
    .get(controller.get)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;
