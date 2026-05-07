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

exports.getSnippetById = (id, callback) => {

  db.query(
    "SELECT * FROM snippets WHERE id=?",
    [id],
    callback
  );

};

exports.updateSnippet = (id, title, code, callback) => {

  db.query(
    "UPDATE snippets SET title=?, code=? WHERE id=?",
    [title, code, id],
    callback
  );

};