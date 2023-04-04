const express = require("express");
const controller = require("../controller/Cmain"); // 파일 이름까지 접근
// controller = {
//     main : ()=> {}
//     comments : ()=> {}
// }

const router = express.Router(); // app.get 치듯이 router.get

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

// 존나중요 router 객체를 app.js에 넣어둔다!
module.exports = router;

// router.post();
