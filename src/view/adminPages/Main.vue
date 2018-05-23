<template>
  <div class="admin">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      name: "后台页面",
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>