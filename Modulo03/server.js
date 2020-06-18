const express = require('express')          // importar uma dependencia 
const nunjucks = require('nunjucks')       

const server =  express()                   // criar um servidor 


// configurar o estilo
server.use(express.static('public'))



// configurar a template engine 
server.set("view engine", "njk")        

nunjucks.configure("views", {
    express:server
})

// criar rotas 
server.get("/", function(req, res){          // req= requisição res=resposta do servidor
     return res.render("about")
})                             

server.get("/portfolio", function(req, res){                 
    return res.render("portfolio")
}) 

server.listen(5000, function(){             //iniciar o servidor // callback é uma função
    console.log ("server is running")
})                   