const express = require("express");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New Form" },
];

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: messages,
  });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;

  const message = messages.find((message) => message.id == id);

  res.render("messages/message-overview", {
    title: "Mini Messageboard",
    links: links,
    message: message,
  });
});

app.get("/new", (req, res) => {
  res.render("form", {
    title: "Mini Messageboard",
    links: links,
  });
});

app.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
