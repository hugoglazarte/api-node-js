const router = require("express").Router();
const usersRoutes = require("./routes/users"); // las rutas de users de la api

router.use("/users", usersRoutes); // estableciendo punto de montaje

module.exports = router;
