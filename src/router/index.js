import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../view/layout/Layout'
import Login from '../view/login/Login'
import authrediret from '../view/login/authredirect'
import List from '../view/programLib/List'
Vue.use(Router)

export const contantRouterMap=[
  {path:'/login',component:Login,hidden:true},
  {path:'/authrediret',component:authrediret,hidden:true},
  {
    path:"/",
    component:Layout,
    name:"layout",
    children:[

    ]
  }
]


export const asyncRouterMap=[
  {
    path:"/programLib",
    component:Layout,
    name: '方案管理',
    icon: 'toux',
    children:[
      { path: 'list', component:List, name: '方案列表' },
      { path: 'edit', component: List, name: '方案修改' }
    ]
  },
  {
    path:"/programLib",
    component:Layout,
    name: '素材库',
    icon: 'toux',
    children:[
      { path: 'list', component:List, name: '方案列表' },
      { path: 'edit', component: List, name: '方案修改' }
    ]
  }
]
export default new Router({
  scrollBehavior:()=>({y:0}),
  routes: contantRouterMap.concat(asyncRouterMap)
})