<template>
  <div>
    <SingleStarShipHeader :imageUrl="`assets/images/planet-1.jpg`" />
    <div class="container-fluid">
      <div style="width : 50%;margin : 0 auto">
        <h2>{{ $route.params.name }}</h2>
        <div v-if="planet">
          <p>climate : {{ planet.climate }}</p>
          <p>Diameter : {{ planet.diameter }}</p>
          <p>Gravity : {{ planet.gravity }}</p>
          <p>Orbital Period : {{ planet.orbital_period }}</p>
          <p>Population : {{ planet.population }}</p>
          <p>Rotation Period : {{ planet.rotation_period }}</p>
          <p>Surface Water : {{ planet.surface_water }}</p>
          <p>Terrain : {{ planet.terrain }}</p>
        </div>
        <div class="recently-viewed">
          Recently Viewed Planets
        </div>
      </div>
      <hr />
      <PlanetComponent :numToShow="3" />
      <PaginationDots />
    </div>
  </div>
</template>
<script>
import PlanetComponent from "../components/Planet";
import SingleStarShipHeader from "../components/SingleStarShipHeader";
import PaginationDots from "../components/PaginationDots";
export default {
  components: {
    SingleStarShipHeader,
    PlanetComponent,
    PaginationDots,
  },
  data() {
    return {
      filteredText: "",
      planet: {},
    };
  },
  async mounted() {
    let [...planet] = this.$store.state.planets;
    this.planet = planet.filter((item) => {
      return item.name == this.$route.params.name;
    })[0];
  },
};
</script>
<style lang="scss" scoped>
p {
  line-height: 1.9;
}
.recently-viewed {
  text-align: center;
  border: 1px solid black;
  padding: 15px;
  width: 300px;
  margin: 0 auto;
}
</style>
