// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import HelloWorld from './components/HelloWorld';

Vue.use(BootstrapVue);
Vue.use(vueResource);
Vue.config.productionTip = false;

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', components: Users },
//     { path: '/home', components: HelloWorld }
//   ]
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // template: `<div id=app>
  // <ul>
  //   <li><router-link to="/">Users</router-link></li>
  //   <li><router-link to="/home">Home</router-link></li>
  // </ul>
  // <router-view></router-view>
  // </div>`
});
//.$mount('#app');
