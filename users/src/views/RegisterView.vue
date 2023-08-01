<template>
    <div> 
      
        <h1>Registro de Usuário</h1>
        <hr>
        <div class="columns is-centered">
          <div class="column is-half">
             
             <MsgView :msg="msg" v-show="msg" />
            
             <!-- 
            <div v-if="this.msg != '' ">
               <div class="notification is-danger">
                  <p>{{ this.msg }}</p> 
               </div>               
            </div>    
            -->   

            <p>Nome</p>
            <input type="text" name="nome" placeholder="Nome do  usuário" class="input" v-model="name">
            <p>E-mail</p>
            <input type="text" name="email" placeholder="edmilson.ludovico@gmail.com" class="input" v-model="email">
            <p>Senha</p>
            <input type="password" nome="password" placeholder="*******" class="input" v-model="password">
            <hr>
            <button class="button is-success" @click="registro">Cadastrar</button>
          </div>

        </div>
        
    </div>
</template>

<script>
  import axios from 'axios';
  import MsgView from '../components/MsgView.vue'
  export default {
    data() {
      return {
        name:'',
        password: '',
        email: '',
        error: undefined,

        msg: null

      }
    },
    components: {
      MsgView
    },
    methods: {
      registro() {
        axios.post("http://localhost:8686/user",{
           nome: this.name,
           password: this.password,
           email: this.email
        }).then(res => {

          this.msg ='Usuário cadastrado com sucesso';
          setTimeout(()=> this.msg = '',7000);

           this.$router.push({name: 'Home'});
           console.log(res);
           
         
        }).catch(err => {
          /*  var msgErro = err.response.data.error;
           this.error = msgErro;
           console.log(this.error);
 */
           this.msg = err.response.data.error;

           console.log(this.msg);

           setTimeout(()=> this.msg = '',3000);
           
            
        });
/* 
        console.log(this.name);
        console.log(this.password);
        console.log(this.email); */
      }
    }

  }
</script>

<style scoped>

</style>
