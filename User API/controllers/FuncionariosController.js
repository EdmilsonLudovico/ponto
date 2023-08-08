var Funcionarios = require("../models/Funcionarios");

const { rota } = require("../routes/routes");

class FuncionariosController{
    
    async listaFuncionarios(req, res){
        var funcionarios = await Funcionarios.findAll();
        res.json(funcionarios);
    }

    async criaFunc(req, res){

        var { nome,endereco,cargo,cpf,entrada,intervalo1,intervalo2,saida } = req.body;

        if(nome == undefined || email =='' || email ==' '){
            res.status(400);
            res.json({error: "nome Invalido!"});
            return;
        }
        if(endereco == undefined || endereco =='' || endereco ==' '){
            res.status(400);
            res.json({error: "endereco Invalido!"});
            return;
        }
        if(cargo == undefined || cargo =='' || cargo ==' '){
            res.status(400);
            res.json({error: "cargo Invalida!"});
            return;
        }
        if(cpf == undefined || cpf =='' || cpf ==' '){
            res.status(400);
            res.json({error: "cpf Invalida!"});
            return;
        }


        var nomeExists = await Funcionarios.findName(nome);

        if(emailExists){
            res.status(406);
            res.json({error: "O e-mail já esta cadastado!"});
            return;
        } 

        try {
          await Funcionarios.novoFunc(nome,endereco,cargo,cpf,entrada,intervalo1,intervalo2,saida);
          res.status(200);
          res.send("Tudo ok!");
        } catch (error) {
            console.log(error);
        };


    }





}

module.exports = new FuncionariosController();