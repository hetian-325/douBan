// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用axios
import axios from 'axios'
Vue.prototype.axios = axios
// 引用jquery
import $ from 'jquery'
// 引用bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 引用mock
require('./mock')

Vue.config.productionTip = false
// 路由守卫
// router.beforeEach((to, from, next) => {
//   if(to.path=='/douban' || to.path=='/dianying' || to.path=='/tushu'){
//       alert("您访问的页面必须登录后才能访问");
//       next('/denglu');
//   }else{
//       next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
