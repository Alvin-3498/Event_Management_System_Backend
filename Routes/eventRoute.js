const express = require("express");
const { createEvent, getEventDetails, cancelUserRegistration, eventStatus } = require("../Controllers/eventController");

const router = express.Router();

router.post("/",createEvent);
router.get("/",getEventDetails);
router.put("/:id",cancelUserRegistration);
router.get("/:id",eventStatus);

module.exports = router;
