const models = require("../models");

exports.index = (req, res) => {
  if (req.session.userid !== undefined) {
    console.log(req.session.userid);
    res.render("index", {
      data: `${req.session.name}님 환영합니다`,
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
    if (result != null) {
      //   console.log(result);
      req.session.userid = req.body.userid;
      req.session.name;
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
  });

  res.redirect("/");
};
