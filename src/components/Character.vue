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
      filteredData: [],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.$store.dispatch("seachField", "");
      },
    },
  },
  computed: {
    characters: {
      get() {
        let { characters, filteredText } = this.$store.state;
        if (filteredText) {
          characters = characters.filter((item) => {
            return item.name.toLowerCase().includes(filteredText.toLowerCase());
          });
          return characters;
        } else {
          return this.filteredData;
        }
      },
      set(value) {
        return value;
      },
    },
  },
  methods: {
    filterCharacters(gender) {
      [...this.characters] = this.filteredData;
      this.characters = this.characters.filter((item) => {
        return item.gender == gender;
      });
    },
  },
  async mounted() {
    try {
      const [...apiResponse] = this.$store.state.characters.length
        ? this.$store.state.characters
        : await this.$store.dispatch("getCharacters");
      this.filteredData = apiResponse.splice(0, this.totalNumber);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style lang="scss" scoped></style>
