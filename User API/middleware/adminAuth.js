const { compare } = require("bcrypt");
var jwt = require("jsonwebtoken");

var secret = "fjassfyvbxjv65673jkdjdbc";


module.exports = function(req, res, next){
    const autoToken = req.headers['authorization']; 

    if(autoToken != undefined){
        const bearer = autoToken.split(' ');
        var token = bearer[1];
        try {
           var decoded = jwt.verify(token, secret);

          if(decoded.role == 1){
              next();
           }else{
             res.status(403);
             res.send("Você não tem permissão nesta página!");
             return;
           }
           //next();
           //res.status(200);
        } catch (error) {
           res.status(403);
           res.json({error:"Você não esta autenticado!"});
            return;
        }
    
    }else{
        res.status(403);
        res.json({error: "Você não esta autenticado!"});

        return;
    }
}