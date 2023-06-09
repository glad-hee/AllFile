const models = require("../models");

exports.index = (req, res) => {
  if (req.session.userid !== undefined) {
    // console.log(req.session.userid);
    res.render("index", {
      data: `${req.session.userid.name}님 환영합니다`,
      login: true,
    });
  } else {
    res.render("index", {
      data: "회원가입 먼저 해주세요",
      login: false,
    });
  }
};

exports.login = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  res.render("register");
};

// 회원가입 버튼
exports.signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then(() => {
    req.session.name = req.body.name;
    res.end();
  });
};

// 로그인 버튼
exports.signin = (req, res) => {
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result !== undefined) {
      //   console.log(result.dataValues);
      req.session.userid = result.dataValues;
      console.log(req.session.userid.name);
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    req.session;
  });

  res.redirect("/");
};

// req.session : '사용자'별로 해당 객체({})안에 세션 정보 유지
// req.session.키 = 값; 세션쿠키설정
// req.session.키; 세션쿠키사용(읽기)
