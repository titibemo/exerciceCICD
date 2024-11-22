
const express = require('express');
const router = express.Router();

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     token: process.env.TOKEN_SECRET

// })

const music = [
"J'abandonne sur une chaise la pipeline du matin",
"Les tests échouent, qu'importe leur branche ou leur chemin",
"J'attends que le CI se lance, qu'il se déploie enfin",
"Je push le code, pour qu'il soit validé cette fois",
"Cette fois je ne lui annoncerai pas",
"La dernière merge conflict",
"Je garderai pour moi ce que m'inspire la build",
"Elle m'a dit qu'elle voulait, si je le permettais",
"Déployer en paix",
"Déployer en paix"
]


//read
router.get('/listUser', (req, res) =>{
    
    //const sql = 'SELECT * FROM users';
    // db.query(sql, (err, results) =>{
    //     if(err){
    //         return res.status(500).send(err);
    //     }
    //     else{
    //         res.status(200).json(results); 
    //     }
    // })
    res.status(200).json(music)
})


module.exports = router;