<template>
  <div>
    <SingleStarShipHeader :imageUrl="`assets/images/character-1.jpg`" />
    <div class="container-fluid">
      <div style="width : 50%;margin : 0 auto">
        <h2>{{ $route.params.name }}</h2>
        <div v-if="character">
          <p>Birth Color : {{ character.birth_year }}</p>
          <p>Diameter : {{ character.eye_color }}</p>
          <p>Gender : {{ character.gender }}</p>
          <p>Hair Color : {{ character.hair_color }}</p>
          <p>Height : {{ character.height }}</p>
          <p>Mass : {{ character.mass }}</p>
          <p>Skin Color : {{ character.skin_color }}</p>
        </div>
        <div class="recently-viewed">
          Recently Viewed Characters
        </div>
      </div>
      <hr />
      <CharactersComponent :totalNumber="2" />
      <PaginationDots />
    </div>
  </div>
</template>
<script>
import CharactersComponent from "../components/Character";
import SingleStarShipHeader from "../components/SingleStarShipHeader";
import PaginationDots from "../components/PaginationDots";
export default {
  components: {
    SingleStarShipHeader,
    CharactersComponent,
    PaginationDots,
  },
  data() {
    return {
      filteredText: "",
      character: {},
    };
  },
  async mounted() {
    let [...character] = this.$store.state.characters;
    this.character = character.filter((item) => {
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
