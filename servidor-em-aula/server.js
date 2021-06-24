// criou arquivo servidor
//npm init.
//instalou express
//instalou nodemon
//atualizou o script do npm start

const express = require("express") //importanto express para o documento

const app = express() //instanciando o express

const filmes = require("./data/ghibli.json")

//definir rota principal

app.get("/",(request, response)=>{
    response.status(200).send("Salve!")
})

app.get("/filmes",(request, response)=>{
    response.status(200).send(filmes)
})


//definir um endponti com id

app.get("/filmes/:identificacao",(request, response)=>{
    //entender qual id o cliente esta requirindo
    const idRequisitado = request.params.identificacao
    //console.log(request.params)
    console.log(idRequisitado)

    //entender o id de cada objeto da minha array
    response.status(200).send(filmes.find(filme => filme.id == idRequisitado))
})

//definir uma porta para o servidor local

app.listen(8080, () =>{
    console.log("Servidor rodando na porta 3000")
})