<template>
  <div class="home">
    <SectionTitle :sectionTitle="'Popular Starships'" />
    <SpaceshipComponent :totalNumber="6" />
    <ViewMoreButton :routeTo="`/starships`" />
    <SectionTitle :sectionTitle="'Popular Planets'" />
    <Planet />
    <SectionTitle :sectionTitle="'Popular Characters'" />
    <Characters :totalNumber="4" />
    <ViewMoreButton :routeTo="`/characters`" />
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceshipComponent from "../components/StarShips";
import ViewMoreButton from "../components/Button";
import Planet from "../components/Planet";
import SectionTitle from "../components/SectionTitle";
import Characters from "../components/Character";
export default {
  name: "Home",
  components: {
    SpaceshipComponent,
    ViewMoreButton,
    Planet,
    Characters,
    SectionTitle,
  },
};
</script>
<style lang="scss" scoped></style>
