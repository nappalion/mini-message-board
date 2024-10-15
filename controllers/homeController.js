const db = require("../db/queries");

const { links } = require("../models/homeModel");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: messages,
  });
}

module.exports = {
  getAllMessages,
};
