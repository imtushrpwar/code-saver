const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: "secret123",
  resave: false,
  saveUninitialized: true
}));

app.set("view engine", "ejs");
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});
// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/code", require("./routes/snippetRoutes"));



app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});