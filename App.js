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



//productos
app.get('/productos',async (req,res) => {
    console.log(req.query)
    res.status(200).json(data.products)    
});

app.get('/productos/:id', async (req,res)=>{
    let prod=data.products.filter(user=>user.id==req.params.id)
    res.json(prod)
})

app.post('/productos',(req,res)=>{
    console.log(req.body)
    data.products.push(req.body)
    res.json(data.products)
})


//compras


app.listen(8080);