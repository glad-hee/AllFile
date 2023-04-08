// TODO: 컨트롤러 코드
const models = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.register = (req, res) => {
  // console.log(req.body); // 사용자가 폼에 입력한 정보
  // User.register(req.body, () => {
  //   // res.end() : 데이터 없이 응답할 때 사용 넘겨줄 게 없음
  //   res.send("성공");
  // });

  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then(() => {
    res.end();
  });
};

exports.loginUser = (req, res) => {
  // console.log(req.body) => 폼에 입력한 로그인 정보
  // result 에 모델 callback받음
  // User.loginUser(req.body, (result) => {
  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });

  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log(result);
    if (result != null) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.viewProfile = (req, res) => {
  // console.log(req.body); // form input value
  // User.viewProfile(req.body.userid, (result) => {
  //   // result -> model callback (rows)
  //   console.log(result); // [ {} ]
  //   if (result.length > 0) {
  //     res.render("profile", { data: result[0] });
  //   }
  // });

  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    if (result != null) {
      res.render("profile", { data: result });
    }
  });
};

exports.editProfile = (req, res) => {
  // User.editProfile(req.body, () => {
  //   res.end();
  // });

  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    { where: { id: req.body.id } }
  ).then(() => {
    res.end();
  });
};

exports.deleteProfile = (req, res) => {
  // User.deleteProfile(req.body.id, () => {
  //   res.end();
  // });

  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.end();
  });
};
