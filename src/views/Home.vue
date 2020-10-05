<template>
  <div class="home">
    <SectionTitle :sectionTitle="'Popular Starships'" />
    <StarshipComponent :totalNumber="6" />
    <ViewMoreButton :routeTo="`/starships`" />
    <SectionTitle :sectionTitle="'Popular Planets'" />
    <Planet :numToShow="3" />
    <PaginationDots />
    <ViewMoreButton :routeTo="`/planets`" />
    <SectionTitle :sectionTitle="'Popular Characters'" />
    <Characters :totalNumber="4" />
    <ViewMoreButton :routeTo="`/characters`" />
  </div>
</template>

<script>
import StarshipComponent from "../components/StarShips";
import PaginationDots from "../components/PaginationDots";
import ViewMoreButton from "../components/Button";
import Planet from "../components/Planet";
import SectionTitle from "../components/SectionTitle";
import Characters from "../components/Character";
export default {
  name: "Home",
  components: {
    StarshipComponent,
    ViewMoreButton,
    PaginationDots,
    Planet,
    Characters,
    SectionTitle,
  },
};
</script>
<style lang="scss" scoped></style>
