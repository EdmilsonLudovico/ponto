<template>
    <div> 
      
        <h1>Login</h1>
        <hr>
        <div class="columns is-centered">
          <div class="column is-half">
             
             <MsgView :msg="msg" v-show="msg" />
            
            <p>E-mail</p>
            <input type="text" name="email" placeholder="edmilson.ludovico@gmail.com" class="input" v-model="email">
            <p>Senha</p>
            <input type="password" nome="password" placeholder="*******" class="input" v-model="password">
            <hr>
            <button class="button is-success" @click="login">Logar</button>
          </div>

        </div>
        
    </div>
</template>

<script>
  import axios from 'axios'; 
  import MsgView from '../components/MsgView.vue';
  export default {
    data() {
      return {
        password: '',
        email: '',
        msg: null

      }
    },
    components: {
      MsgView
    },
    methods: {
      login() {
        axios.post("http://localhost:8686/login",{
           password: this.password,
           email: this.email
        }).then(res => {
            localStorage.setItem('token',res.data.token);  // salvando token
            this.$router.push({name: 'Home'});     
        }).catch(err => {
           this.msg = err.response.data.error;
           console.log(this.msg);
           setTimeout(()=> this.msg = '',3000);
        });
      }
       
    }

  }
</script>

<style scoped>

</style>
