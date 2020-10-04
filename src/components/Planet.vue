<template>
  <div class="gtco-testimonials card-container">
    <template v-for="(item, index) in planets">
      <PlanetCard :planet="item" :key="index" :index="index" />
    </template>
    <PaginationDots />
  </div>
</template>
<script>
import PlanetCard from "./PlanetCard";
import PaginationDots from "./PaginationDots";
export default {
  data() {
    return {
      planets: [],
    };
  },
  components: {
    PlanetCard,
    PaginationDots,
  },
  async mounted() {
    try {
      const [...apiResponse] = this.$store.state.planets.length
        ? this.$store.state.planets
        : await this.$store.dispatch("getPlanets");
      this.planets = apiResponse.splice(0, 3);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style lang="scss" scoped>
.gtco-testimonials {
  position: relative;
  margin-top: 30px;
}
@media (max-width: 767px) {
  .gtco-testimonials {
    margin-top: 20px;
  }
}
.gtco-testimonials {
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 1;
}
</style>
