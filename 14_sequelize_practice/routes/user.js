// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 기본 주소 : localhost:PORT/user

// GET
router.get("/", controller.index);

// GET
router.get("/signup", controller.signup);

// POST register
router.post("/signup", controller.register);

// GET
router.get("/signin", controller.signin);

// post login
router.post("/signin", controller.loginUser);

// post
router.post("/profile", controller.viewProfile);

// FIRST EDIT
router.get("/profile/select", controller.editFirst);

// oneProfile
// router.post("/profile".controller.oneProfile);

// PATCH
router.post("/profile/edit", controller.editProfile);

// DELETE
router.post("/profile/delete", controller.deleteProfile);

module.exports = router;
