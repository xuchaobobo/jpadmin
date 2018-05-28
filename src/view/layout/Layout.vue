<template>
  <div class="layout">
    <!-- <header>头部</header> -->
    <div class="container">
       <sidebar class="sidebar-container"></sidebar>
        <div class="main">
          <navbar></navbar>
          <app-main></app-main>
        </div>
    </div>
   
  </div>
</template>

<script>
import {Navbar,Sidebar,AppMain} from 'view/layout'
export default {
  name: "layout",
  components:{
    Navbar,
    Sidebar,
    AppMain
  },
  data() {
    return {
      name: "后台页面",
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.container{
  display: flex;
  background-color: #F1F3F9;
  .sidebar-container{
    width: 280px;
    background-color: #29313D;
    height: 100%;
  }
  .main{
    flex: 1
  }
}
</style>