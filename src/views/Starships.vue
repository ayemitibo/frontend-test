<template>
  <div class="starships">
    <SectionTitle :sectionTitle="'Popular Starships'" />
    <SpaceshipComponent :totalNumber="9" ref="starships" />
    <PaginationButton @next="nextCharacters" />
  </div>
</template>
<script>
import SectionTitle from "../components/SectionTitle";
import SpaceshipComponent from "../components/StarShips";
import PaginationButton from "../components/Pagination";
export default {
  components: {
    SectionTitle,
    SpaceshipComponent,
    PaginationButton,
  },
  methods: {
    async nextCharacters(page) {
      this.$refs.starships.getStarShips(page);
    },
  },
};
</script>
