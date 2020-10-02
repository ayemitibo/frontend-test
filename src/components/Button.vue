<template>
  <router-link tag="div" :to="routeTo" class="btn btn-lg">
    View More
  </router-link>
</template>
<script>
export default {
  props: {
    routeTo: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-lg {
  margin: 20px auto;
  padding: 10px 0;
  text-align: center;
  border: 1px solid black;
  width: 400px;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
}
</style>
