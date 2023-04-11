const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index);

router.get("/login", controller.login);

router.get("/register", controller.register);

// 로그인 클릭시
router.post("/login", controller.signin);

// 회원가입 클릭시
router.post("/register", controller.signup);

// 로그아웃
router.get("/logout", controller.logout);

module.exports = router;
