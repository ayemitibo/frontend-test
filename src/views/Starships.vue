<template>
  <div class="about">
    <SectionTitle :sectionTitle="'Popular Starships'" />
    <SpaceshipComponent :totalNumber="12" />
  </div>
</template>
<script>
import SectionTitle from "../components/SectionTitle";
import SpaceshipComponent from "../components/StarShips";
export default {
  components: {
    SectionTitle,
    SpaceshipComponent,
  },
};
</script>
