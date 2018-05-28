<template>
  <el-menu mode="vertical" background-color="#545c64" :default-active="$route.path" unique-opened  >
      <div class="userinfo">
        <icon-svg icon-class="toux" class="userimg"></icon-svg>
        <p>欢迎，{{user}}</p>
      </div>
      <sidebar-item :routes="asyncRouterMap"></sidebar-item>
  </el-menu>
</template>

<script>
import { asyncRouterMap } from "@/router";
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  name: "Sidebar",
  components: {
    SidebarItem
  },
  data() {
    return {
      user:"A用户",
      asyncRouterMap: asyncRouterMap
    };
  },
  created: () => {},
  computed: {
    ...mapGetters([])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.userinfo{
  text-align: center;
  color: white;
  padding:58px 0;
  font-size: 20px;
  .userimg{
    width: 104px;
    height: 104px;
  }
}
</style>