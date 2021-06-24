const express = require("express")
//const { response } = require("express")
const estados = require("./data/estados-cidades.json")
const app = express()

app.get("/estados",(request, response)=>{
    response.status(200).send(estados)
})

//app.get("/estados/:sigla",(request, response)=>{
    //entender qual id o cliente esta requirindo
   // const siglaRequisitado = request.params.sigla
    //console.log(request.params)
    //console.log(siglaRequisitado)

    //entender o id de cada objeto da minha array
  //  response.status(200).send(estados.find(siglaSelecionada => siglaSelecionada.sigla == siglaRequisitado))
//})


app.listen(8000, () =>{
    console.log("Servidor rodando na porta 6000")
})