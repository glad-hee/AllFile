const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const indexRouter = require("./routes/todo");
app.use("/api", indexRouter);

// app.get("*", (req, res) => {
//   res.render("404");
// });

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
