const { links } = require("../models/homeModel");
const db = require("../db/queries");

function newGet(req, res) {
  res.render("form", {
    title: "Mini Messageboard",
    links: links,
  });
}

async function newPost(req, res) {
  const { messageText, messageUser } = req.body;

  await db.insertMessage(messageText, messageUser);

  res.redirect("/");
}

async function getMessage(req, res) {
  const { id } = req.params;

  const message = await db.getMessage(id);
  console.log(message);
  if (message) {
    res.render("messages/message-overview", {
      title: "Mini Messageboard",
      links: links,
      message: message,
    });
  } else {
    res.redirect("/");
  }
}

async function deleteMessage(req, res) {
  const { id } = req.params;
  const message = await db.deleteMessage(id);

}

module.exports = {
  newGet,
  getMessage,
  newPost,
};
