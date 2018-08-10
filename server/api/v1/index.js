const router = require("express").Router();

const usersRoutes = require("./routes/users"); // las rutas de users de la api
const categoriesRoutes = require("./routes/categories");
const postsRoutes = require("./routes/posts");

router.use("/users", usersRoutes); // estableciendo punto de montaje
router.use("/categories", categoriesRoutes);
router.use("/posts", postsRoutes);

module.exports = router;
