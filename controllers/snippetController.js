const snippetModel = require("../models/snippetModel");

exports.dashboard = (req, res) => {
  snippetModel.getSnippetsByUser(req.session.user.id, (err, results) => {
    res.render("dashboard", { snippets: results });
  });
};

exports.showAdd = (req, res) => {
  res.render("add");
};

exports.addSnippet = (req, res) => {
  const { title, code } = req.body;

  snippetModel.createSnippet(
    req.session.user.id,
    title,
    code,
    () => res.redirect("/code/dashboard")
  );
};

exports.deleteSnippet = (req, res) => {
  snippetModel.deleteSnippet(req.params.id, () => {
    res.redirect("/code/dashboard");
  });
};