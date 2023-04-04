const express = require("express");
const app = express();
const PORT = 2500;

const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, ext) + `${req.body.userId}` + ext
      );
    },
  }),
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", upload.single("userFile"), (req, res) => {
  res.render("result", {
    userId: req.body.userId,
    userPw: req.body.userPw,
    userName: req.body.userName,
    userOld: req.body.userOld,
    userFile: req.file.filename,
  });
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`https://localhost${PORT}`);
});
