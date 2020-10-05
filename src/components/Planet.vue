<template>
  <div class="gtco-testimonials card-container">
    <Loader v-if="isFetching" :itemToShow="numToShow" :widthSize="'33.3%'" />
    <template v-for="(item, index) in planets">
      <PlanetCard :planet="item" :key="index" :index="index" />
    </template>
  </div>
</template>
<script>
import PlanetCard from "./PlanetCard";
export default {
  data() {
    return {
      planets: [],
      isFetching: true,
    };
  },
  props: {
    numToShow: {
      type: Number,
    },
  },
  components: {
    PlanetCard,
  },
  methods: {
    async getPlanets(page) {
      try {
        let apiResponse;
        this.isFetching = true;
        if (page) {
          [...apiResponse] = await this.$store.dispatch("getPlanets", page);
        } else {
          [...apiResponse] = this.$store.state.planets.length
            ? this.$store.state.planets
            : await this.$store.dispatch("getPlanets");
        }
        this.planets = apiResponse.splice(0, this.numToShow);
        this.isFetching = false;
      } catch (error) {
        this.isFetching = false;
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.getPlanets();
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
