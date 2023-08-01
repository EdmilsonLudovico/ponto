var Funcionarios = require("../models/Funcionarios");

const { func } = require("../routes/routes");

class FuncionariosController{
    
    async listaFuncionarios(req, res){
        var funcionarios = await Funcionarios.findAll();
        res.json(funcionarios);
    }





}

module.exports = new FuncionariosController();