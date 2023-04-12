const Info = require("../model/loginInfo");

exports.main = (req, res) => {
  res.render("index");
};

exports.loginInfo = (req, res) => {
  const userInfo = Info.userInfo();

  //   if (req.body.userId == userInfo.id && req.body.userPw == userInfo.pw) {
  //     res.send({ isLogin: true, userInfo: req.body });
  //   } else if (
  //     req.body.userId !== userInfo.id ||
  //     req.body.userPw !== userInfo.pw
  //   ) {
  //     res.send({ isLogin: false });
  //   }

  //   const users = Info.users;
  //   console.log(users.split("\n"));
  //   const usersSplit = users.split("\n");
  //   console.log(usersSplit[1].slice(14, 19));
  //   console.log(usersSplit[1].length);

  //   if (
  //     req.body.userId == usersSplit[1].slice(0, 6) &&
  //     req.body.userPw == usersSplit[1].slice(8, 12)
  //   ) {
  //     res.send({ isLogin: true, usersId: usersSplit[1].slice(14, 19) });
  //   } else if (
  //     req.body.userId !== usersSplit[1].slice(0, 6) ||
  //     req.body.userPw !== usersSplit[1].slice(8, 12)
  //   ) {
  //     res.send({ isLogin: false });
  //   }

  const userDatas = Info.users.split("\n");

  const users = [];
  const userIds = [];
  for (let user of userDatas) {
    users.push({
      realId: user.split("//")[0],
      realPw: user.split("//")[1],
      realName: user.split("//")[2],
    });
    userIds.push(user.split("//")[0]);
  }
};
