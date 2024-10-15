require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "/public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/userRoutes");
const homeController = require("./controllers/homeController");

app.get("/", homeController.getAllMessages);

app.use("/user", userRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
