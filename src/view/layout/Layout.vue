<template>
  <div class="layout">
    <!-- <header>头部</header> -->
    <div class="container">
       <sidebar class="sidebar-container"></sidebar>
        <div class="main">
          <navbar class="navtop"></navbar>
          <app-main class="appmain"></app-main>
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
.layout{
  height: 100%;
}
.container{
  display: flex;
  height: 100%;
  background-color: #F1F3F9;
  .sidebar-container{
    width: 280px;
    background-color: #29313D;
    height: 100%;
  }
  .main{
    flex: 1;
    display: flex;
    flex-direction: column;
    .navtop{
      height: 80px;
    }
    .appmain{
      flex: 1;
    }
  }
}
</style>