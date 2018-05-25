<template>
  <el-menu mode="vertical" theme="dark" :default-active="$route.path" unique-opened  >
      <sidebar-item :routes="asyncRouterMap"></sidebar-item>
  </el-menu>
</template>

<script>
import {asyncRouterMap} from '@/router'
import SidebarItem from './SidebarItem'
export default {
  name: "Sidebar",
  components:{
    SidebarItem
  },
  data(){
    return{
     asyncRouterMap:asyncRouterMap,
    }
  },
  created:()=>{
  },
  computed:{
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
</style>