const pool = require("./pool");

async function getAllMessages(search) {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows[0];
}

async function deleteMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows[0];
}

async function insertMessage(text, username) {
  await pool.query(
    `INSERT INTO messages (text, username) 
    VALUES ($1, $2)`,
    [text, username]
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
  deleteMessage
};
