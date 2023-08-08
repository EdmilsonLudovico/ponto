<template>
    <div>
        <div>
            <h1>Cadastro de Funcionários</h1>
        </div>
        <div>
            <div>
                <p>Nome</p>
                <input type="text" name="nome" placeholder="" class="input" v-model="nome">
            </div>
            
            <div>
                <p>Endereço</p>
                <input type="text" name="endereco" placeholder="digite o endereço" class="input" v-model="endereco">
            </div>
            
            <div>
                <p>Cargo</p>
                <input type="text" name="cargo" placeholder="digite o Cargo" class="input" v-model="cargo">
            </div>
            
            <div>
                <p>CPF</p>
                <input type="text" name="cpf" placeholder="digite o cpf" class="input" v-model="cpf">
            </div>
            
            <div>
                <p>Quadro de Horário</p>
                <input type="text" name = "entrada" placeholder="digite o Entrada" class="input" v-model="entrada">
                <input type="text" name = "intervalo1" placeholder="" class="input" v-model="intervalo1">
                <input type="text" name = "intervalo2" placeholder="" class="input" v-model="intervalo2">
                <input type="text" name = "saida" placeholder="" class="input" v-model="saida">
                <hr>
            </div>
            

            <button class="button is-success" @click="registro">Cadastrar</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
      return {
            name: 'FuncionarioView',
            nome:'',
            endereco: '',
            cargo: '',
            cpf: '',
            entrada: null,
            intervalo1: null,
            intervalo2: null,
            saida: null
        }
    }
}
</script>

<style scoped>

</style>