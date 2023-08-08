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

    async findName(nome){
        try {
            var result = await knex.table("funcionarios").where({nome: nome});
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async findId(id){
        try {
           var result = await knex.select()
           .where({id: id}).table("funcionarios");   //.orderBy([{ column: 'id', order: 'desc' }]);

             if (result.length > 0){
              return result[0];
            }else{
                return {undefined};
            }
          } catch (error) {
              console.log(error);
              return undefined;
          }
        }
           
    async novoFunc(nome,endereco,cargo,cpf,entrada,intervalo1,intervalo2,saida){
        try {
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({nome,endereco,cargo,cpf,entrada,intervalo1,intervalo2,saida}).table("funcionarios");
        } catch (error) {
            console.log(error);
        }
    }

}
module.exports = new Funcionarios();