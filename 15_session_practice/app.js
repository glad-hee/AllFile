const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.use(
  session({
    secret: "5656",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/user");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
