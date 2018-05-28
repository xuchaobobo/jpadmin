// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import  './mock'
import './icons'
import myPlugins from './directive'

//引入elementui
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import {getWeek}  from "@/utils/dateFomart.js";
Vue.use(ElementUI);
// Vue.use(myPlugins);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.directive('time',{
  bind:function(el, binding){
    el.innerHTML = getWeek();
    el.__timeout__ = setInterval(function(){
      el.innerHTML = getWeek();
    }, 60000)
  },
  unbind:function(el){
    clearInterval(el.__timeout__);
    delete el.__timeout__;
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  data: {  
    nowTime: (new Date()).getTime(),                               //随便一个时间戳  
  },
  template: '<App/>'
})
