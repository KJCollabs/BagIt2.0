// change to connect to current/fav list

const router = require("express").Router();
const currentListRoutes = require("./currentList");
const itemRoutes = require("./items");
const userRoutes = require("./users");
const categoryRoutes = require("./categories");

// Book routes
router.use("/currentList", currentListRoutes);
router.use("/items", itemRoutes);
router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
