import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
   user,
   app
 },
 getters:getters
})
