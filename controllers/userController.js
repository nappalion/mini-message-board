const { links } = require("../models/homeModel");
const { messages, getNextId } = require("../models/userModel");

module.exports = {
  newGet: (req, res) => {
    res.render("form", {
      title: "Mini Messageboard",
      links: links,
    });
  },

  newPost: (req, res) => {
    const { messageText, messageUser } = req.body;
    messages.push({
      text: messageText,
      user: messageUser,
      added: new Date(),
      id: getNextId(),
    });

    res.redirect("/");
  },

  getMessage: (req, res) => {
    const { id } = req.params;

    const message = messages.find((message) => message.id == id);

    res.render("messages/message-overview", {
      title: "Mini Messageboard",
      links: links,
      message: message,
    });
  },
};
