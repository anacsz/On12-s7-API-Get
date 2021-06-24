
const express = require("express") //importando o express
const app = express() //trazendo e armazenando a função na variavél

app.get("/",(request,response)=>{
    response.status(200).json("salve! <3")
})

app.get("/jurema", (request, response) => {
    console.log('Url Jurema foi requerida')
    response.status(200).json([
        {
            'nome': 'jurema',
            'idade': 'adulta'
        },
        {
            'dona': 'vitoria',
            'tempo': '4 meses'
        }
    ])
})


app.listen(8080, () => {
    console.log("hello")
    console.log("Meu primeiro servidor na porta 3000")
})  //criando a porta do servidor