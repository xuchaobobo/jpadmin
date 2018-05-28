<template>
  <div class="Navbar">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <img src="@/assets/img/logo.png" alt="">
      </el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
  .grid-content{
    width: 100%;
  }
  .Navbar{
    height: 80px;
    line-height: center;
    text-align: center;
  }
</style>