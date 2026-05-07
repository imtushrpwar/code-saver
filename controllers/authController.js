const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

exports.showRegister = (req, res) => {
  res.render("register");
};

exports.home = (req, res) => {
  res.render("home", { user: req.session.user || null });
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  userModel.createUser(username, email, hash, () => {
    res.redirect("/");
  });
};

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, async (err, results) => {
    if (results.length > 0) {
      const match = await bcrypt.compare(password, results[0].password);
      if (match) {
        req.session.user = results[0];
        return res.redirect("/code/dashboard");
      }
    }
    res.send("Invalid credentials");
  });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};