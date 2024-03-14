const express = require("express");
const event_route = require("./event");

const router = express.Router();

// registering child routers
router.use("/event", event_route);
module.exports = router;
