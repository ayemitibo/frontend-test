<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.container-fluid {
  width: 80%;
  position: relative;
  margin: 0 auto;
}
</style>
