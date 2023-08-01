var knex = require("../database/connection");

//service
class Funcionarios{
    //listagem dos Funcionarios cadastrados
    async findAll(){
        try {
            var result = await knex.select().table("funcionarios").orderBy([{ column: 'nome', order: 'desc' }]);
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

}
module.exports = new Funcionarios();