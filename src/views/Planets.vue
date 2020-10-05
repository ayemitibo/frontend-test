<template>
  <div>
    <SectionTitle :sectionTitle="'Popular Planets'" />
    <Planet :numToShow="9" ref="planet" />
    <PaginationButton @next="nextPlanet" />
  </div>
</template>
<script>
import Planet from "../components/Planet";
import SectionTitle from "../components/SectionTitle";
import PaginationButton from "../components/Pagination";
export default {
  components: {
    Planet,
    PaginationButton,
    SectionTitle,
  },
  methods: {
    async nextPlanet(page) {
      this.$refs.planet.getPlanets(page);
    },
  },
};
</script>
<style lang="scss" scoped>
.col-md-4 {
  margin-bottom: 15px;
}
</style>
