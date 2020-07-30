    const sqlite3 = require('sqlite3').verbose()
    const db = new sqlite3.Database('./ProjetoCasaCriativa.db')

    db.serialize(function(){

        //Criar a tabela
        db.run(`
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT

            );
        
        `)

        //Inserir dados na tabela 
        //const query = `
        //INSERT INTO ideias(
          //  image,
            //title, 
            //category,
            //description,
            //link

       // )VALUES (?,?,?,?,?);
   // `   
      //  const values = [
        //    "https://image.flaticon.com/icons/svg/3039/3039657.svg",
        //    "Cursos de Programação",
        //    "Estudo",
        //    "blablablabla blablabla blabla bl hfejwohfwho  newnoewn",
        //     "https://www.linkedin.com/in/deangelo-andrade/"
        //]

       // db.run(query, values, function(err) {
       //     if (err) return console.log(err)
       //     
       //     console.log(this)
       // })
       
       //Deletar um dado na tabela
       //db.run(`DELETE FROM ideias WHERE id = ?`, [1], function(err){
         //  if(err) return console.log(err)

           //console.log("DELETEI", this)
       //})



        //Consultar dado na tabela
       // db.all(`SELECT * FROM ideias`, function( err, rows){
         //   if (err) return console.log(err)

           // console.log(rows)
       // })



        



    })


 // 26:00 minutos aula 5
    module.exports = db 


    //test 30/07