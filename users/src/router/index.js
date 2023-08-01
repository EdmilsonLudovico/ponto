import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import UsersAdmView from '../views/UsersAdmView'

import axios from 'axios'

function AdminAuth(to, from, next){
    if(localStorage.getItem('token') != undefined){
      
      var req = {
        headers: {
          Authorization: "Bearer "+localStorage.getItem('token')
        }
      } 

      console.log(req);

      axios.post("http://local:8686/validate",{},req).then(res => {
        console.log(res);
        next();
      }).catch(err => {
        console.log(err.response);
        next("/login");
      })

    }else{
      next("/login");
    }
}
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: Register
  },
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  },
  {
    path: '/adm/users',
    name: 'UsersAdmView',
    component: UsersAdmView,
    beforeEnter: AdminAuth
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
