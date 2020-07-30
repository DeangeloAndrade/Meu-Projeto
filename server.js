//usei o meu express pra criar e configurar meu servidor
const express = require("express")
const server = express()

// Colocar o html: 1h:10 - array (vetores)
// Início DB 

const db = require("./db")


const ideias = [

        {
            img: "https://image.flaticon.com/icons/svg/3039/3039657.svg",
            title: "Cursos de Programação1",
            category: "Estudo1",
            description: "blablablabla blablabla blabla bl hfejwohfwho  newnoewn",
            ulr: "https://www.linkedin.com/in/deangelo-andrade/"
        
        },
        {
            img: "https://image.flaticon.com/icons/svg/3039/3039657.svg",
            title: "Cursos de Programação2",
            category: "Estudo2",
            description: "blablablabla blablabla blabla bl hfejwohfwho  newnoewn",
            ulr: "https://www.linkedin.com/in/deangelo-andrade/"
        
        },
        {
            img: "https://image.flaticon.com/icons/svg/3039/3039657.svg",
            title: "Cursos de Programação3",
            category: "Estudo3",
            description: "blablablabla blablabla blabla bl hfejwohfwho  newnoewn",
            ulr: "https://www.linkedin.com/in/deangelo-andrade/"
        
        },
        {
            img: "https://image.flaticon.com/icons/svg/3039/3039657.svg",
            title: "Cursos de Programação4",
            category: "Estudo4",
            description: "blablablabla blablabla blabla bl hfejwohfwho  newnoewn",
            ulr: "https://www.linkedin.com/in/deangelo-andrade/"
        
        },



]

// configurar arquivos estáticos (css, script, imagens)

server.use(express.static("public"))

// configuração do nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, // boolean
})

//criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res){

        db.all(`SELECT * FROM ideias`, function( err, rows){
                if (err) return console.log(err)

                const reversedIdeias = [...ideias].reverse()

                let lastIdeias = []
                for (let idea of reversedIdeias){
                    if (lastIdeias.length < 2){
                        lastIdeias.push(idea)
                    }
                }
            
                return res.render("index.html", { ideias: lastIdeias}) 

})


server.get("/ideais", function(req, res){

    const reversedIdeias = [...ideias].reverse()

    return res.render("ideais.html", {ideias: reversedIdeias})
})

// liguei meu servidor na porta 3000
server.listen(3000) 
 })

 //test 30/07