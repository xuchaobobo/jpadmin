// import Vue from 'vue'
// import {getWeek}  from "@/utils/dateFomart.js";
// export default Vue.directive('time',{
//     bind:function(el, binding){
//       el.innerHTML = getWeek();
//       el.__timeout__ = setInterval(function(){
//         el.innerHTML = getWeek();
//       }, 60000)
//     },
//     unbind:function(el){
//       clearInterval(el.__timeout__);
//       delete el.__timeout__;
//     }
//   })