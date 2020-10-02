<template>
  <div class="col-md-4" style="height : 350px">
    <div
      class="card-content"
      :style="`backgroundImage : url(assets/images/planet-${1 + index}.jpg)`"
    >
      <h5>
        {{ planet.name }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    planet: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
};
</script>
<style lang="scss" scoped>
.card-content {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  h5 {
    color: white;
    font-size: 20px;
  }
}
</style>
