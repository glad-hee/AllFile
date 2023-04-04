const comments = require("../model/Comment"); // table name 으로 보통 변수설정
// comment = {
//     getComments : () => {}
// }

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  console.log(comments.getComments());
  res.render("comments", { commentInfos: comments.getComments() });
};

exports.comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params.id); // id 고유 값

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments.getComments()[commentId - 1]);

  // 존재하지 않는 댓글 id 접근시 404 페이지
  if (commentId < 1 || commentId > comments.getComments().length) {
    return res.render("404");
  }

  // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
  if (isNaN(commentId)) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments.getComments()[commentId - 1] });
};
