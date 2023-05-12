const { Users } = require("../models");

// 로그인
exports.login = async (req, res) => {
  const userInfo = await Users.findOne({
    where: { userId: req.body.userId, password: req.body.password },
  });

  // userInfo 결과 존재 여부에 따른 응답
  if (!userInfo) {
    res.status(400).send({ data: null, message: "not authorized" });
  } else {
    req.session.userId = userInfo.userId;
    console.log("POST /login req.session >>", req.session);
    res.send({ data: userInfo, message: "ok" });
  }
};

// 로그아웃
exports.logout = (req, res) => {
  console.log("POST /logout req.session >>", req.session);
  if (!req.session.userId) {
    res.status(400).send({ data: null, message: "not authorized" });
  } else {
    req.session.destroy(); // 세션 삭제
    res.send({ data: null, message: "ok" });
  }
};

// 유저 정보 조회
exports.userinfo = async (req, res) => {
  console.log("GET /userinfo req.session >>", req.session);
  if (!req.session.userId) {
    res.status(400).send({ data: null, message: "not authorized" });
  } else {
    const result = await Users.findOne({
      where: { userId: req.session.userId },
    }).catch((err) => res.json(err));
    res.send({ data: result, message: "ok" });
  }
};

// 단순 session 확인
exports.session = (req, res) => {
  res.send(req.session);
};

exports.session = (req, res) => {
  res.send(req.session);
};
