const express = require("express");
const controller = require("../controller/Cmain");

const router = express.Router();

router.get("/", controller.main);
router.post("/axios", controller.loginInfo);

module.exports = router;
