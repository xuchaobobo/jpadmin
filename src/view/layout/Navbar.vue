<template>
  <div class="Navbar">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <img src="@/assets/img/logo.png" alt="">
      </el-col>
      <el-col :span="4" class="login">
        <span v-time="timeNow" class="times"> 
        </span>
        <el-badge :value="3" :max="100" class="item" id="badgeicon">
          <icon-svg icon-class="notion"></icon-svg>
        </el-badge>
        
        <icon-svg icon-class="exit"></icon-svg>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import { getWeek } from "@/utils/dateFomart.js";
export default {
  name: "Navbar",
  data() {
    return {
      name: "后台页面",
      timeNow: getWeek()
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.grid-content {
  width: 100%;
}
.Navbar {
  background-color: white;

  line-height: 80px;
  text-align: center;
  img {
    vertical-align: middle;
  }
  .times {
    display: inline-block;
    height: 80px;
    line-height: 25px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .login{
    padding:10px;
  }
 
}
</style>