const express = require("express");
const { registerEvent, listUpcomingEvents } = require("../Controllers/userController");

const router = express.Router();

router.post("/",registerEvent);
router.get("/",listUpcomingEvents);

module.exports = router;