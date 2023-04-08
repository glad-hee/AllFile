// TODO: 컨트롤러 코드
const User = require("../model/User");

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
  console.log(req.body); // 사용자가 폼에 입력한 정보
  User.register(req.body, () => {
    // res.end() : 데이터 없이 응답할 때 사용 넘겨줄 게 없음
    res.send("성공");
  });
};

exports.loginUser = (req, res) => {
  // console.log(req.body) => 폼에 입력한 로그인 정보
  // result 에 모델 callback받음
  User.loginUser(req.body, (result) => {
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// exports.profile = (req, res) => {
//   res.render("profile");
// };

exports.viewProfile = (req, res) => {
  console.log(req.body); // form input value
  User.viewProfile(req.body.userid, (result) => {
    // result -> model callback (rows)
    console.log(result); // [ {} ]
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    }
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, () => {
    res.end();
  });
};

exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.end();
  });
};
