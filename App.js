const express = require('express');
const app = express();

app.use(express.json())

const data = {
    users: [{
        id:1,
        nombre:"Gabriel Castillo",
        username:"Yamielsun"},
        {id:2,
        nombre:"Hernan Castillo",
        username:"Zeri"},
        {id:3,
        nombre:"Monica Rodado",
        username:"Monysofy"
        }
    ],
    products:[{
        id:1,
        nombre:"lapiz",
        precio:10},
        {id:2,
        nombre:"borrador",
        precio:8},
        {id:3,
        nombre:"sacapunta",
        precio:5}
    ],
    compras:[{
        id:1,
        idUsuario:1,
        idProducto:1}]
}

dotenv.config();

const UserRouter = require("./routes/User");
const tweetsRouter = require("./routes/tweets");

app.use("/User", UserRouter);
app.use("/tweets", tweetsRouter);

app.get("/", (req, res) => {
    let returnString = `Welcome to the Twitter API Clone.\n\n`;
    return res.send(returnString);
 });

app.listen(8080);