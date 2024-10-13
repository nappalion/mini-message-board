const express = require("express");
const app = express();

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const userRoute = require("./routes/userRoutes");
const homeController = require("./controllers/homeController");

app.get("/", homeController.index);

app.use("/user", userRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
