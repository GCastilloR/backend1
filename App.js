const express = require('express');
const app = express();

app.use(express.json())


const UserRouter = require("./routes/User");
const tweetsRouter = require("./routes/tweets");

app.use("/User", UserRouter);
app.use("/tweets", tweetsRouter);

app.get("/", (req, res) => {
    let returnString = `Welcome to the Twitter API Clone.\n\n`;
    return res.send(returnString);
 });

app.listen(8080);