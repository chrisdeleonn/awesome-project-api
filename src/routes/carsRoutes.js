const express = require("express");
const router = express.Router();
const carsController = require("../countrollers/carsController");

router.post("/addEntry", carsController.createLogHistory);
router.get("/getEntries", carsController.getLogHistory);

module.exports = router;
