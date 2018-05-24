<template>
  <section class="AppMain">
      55
    <transition name="fade" mode="out-in">
        <router-view ></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
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
</style>