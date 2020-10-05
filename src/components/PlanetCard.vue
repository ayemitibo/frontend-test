<template>
  <div class="col-md-4">
    <div
      class="card-content"
      style="height : 350px"
      v-if="$route.fullPath !== '/planets'"
      :style="
        `backgroundImage : url(assets/images/planet-${
          index <= 2 ? 1 + index : Math.ceil(Math.random() * 2)
        }.jpg)`
      "
    >
      <h5>
        {{ planet.name }}
      </h5>
    </div>
    <div class="card" v-if="$route.fullPath == '/planets'">
      <div
        class="cardTop"
        :style="
          `backgroundImage : url(assets/images/planet-${
            index <= 2 ? 1 + index : Math.ceil(Math.random() * 2)
          }.jpg)`
        "
      ></div>
      <div class="cardBottom">
        <div class="cardText">
          <!--       Title and description will always show -->
          <p class="cardTitle">{{ planet.name }}</p>
          <p>Temerature : {{ planet.climate }}</p>
          <p>Population : {{ planet.population }}</p>
          <div class="stage">
            <router-link tag="a" :to="`/planet/${planet.name}`"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
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
.col-md-4 {
  margin-bottom: 15px;
}
</style>
