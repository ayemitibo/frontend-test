<template>
  <h2>{{ sectionTitle }}</h2>
</template>
<script>
export default {
  props: {
    sectionTitle: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
$color-dark: #5a5858;

h2 {
  text-align: center;
  position: relative;
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 15px;
}
h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 5px;
  background: $color-dark;
  width: 72px;
  transform: translate(-50px, 0);
}
</style>
