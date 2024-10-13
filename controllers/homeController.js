const { links } = require("../models/homeModel");
const { messages } = require("../models/userModel");

module.exports = {
  index: (req, res) => {
    res.render("index", {
      title: "Mini Messageboard",
      links: links,
      messages: messages,
    });
  },
};
