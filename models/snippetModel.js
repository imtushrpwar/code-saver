const db = require("../config/db");

exports.createSnippet = (userId, title, code, callback) => {
  db.query(
    "INSERT INTO snippets (user_id, title, code) VALUES (?, ?, ?)",
    [userId, title, code],
    callback
  );
};

exports.getSnippetsByUser = (userId, callback) => {
  db.query(
    "SELECT * FROM snippets WHERE user_id = ?",
    [userId],
    callback
  );
};

exports.deleteSnippet = (id, callback) => {
  db.query("DELETE FROM snippets WHERE id = ?", [id], callback);
};