<template>
  <div class="card-container">
    <template v-for="(item, index) in characters">
      <CharacterCard :character="item" :index="index" :key="index" />
    </template>
  </div>
</template>
<script>
import CharacterCard from "./CharacterCard";
export default {
  components: {
    CharacterCard,
  },
  props: {
    totalNumber: {
      type: Number,
    },
  },
  data() {
    return {
      characters: [],
    };
  },
  async mounted() {
    try {
      const [...apiResponse] = this.$store.state.characters.length
        ? this.$store.state.characters
        : await this.$store.dispatch("getCharacters");
      this.characters = apiResponse.splice(0, this.totalNumber);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style lang="scss" scoped></style>
