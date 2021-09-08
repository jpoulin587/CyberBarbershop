const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
//const withAuth = require("../utils/auth");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
