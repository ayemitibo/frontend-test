<template>
  <div class="card-container">
    <Loader v-if="isFetching" :itemToShow="totalNumber" />
    <template v-for="(item, index) in characters" v-else>
      <CharacterCard :character="item" :index="index" :key="index" />
    </template>
  </div>
</template>
<script>
import CharacterCard from "./CharacterCard";
import Loader from "./Loader";
export default {
  components: {
    CharacterCard,
    Loader,
  },
  props: {
    totalNumber: {
      type: Number,
    },
  },
  data() {
    return {
      filteredData: [],
      gender: "",
      isFetching: true,
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
        } else if (this.gender) {
          characters = characters.filter((item) => {
            return item.gender == this.gender;
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
    async getCharacters(page) {
      try {
        this.isFetching = true;
        let apiResponse;
        if (page) {
          [...apiResponse] = await this.$store.dispatch("getCharacters", page);
        } else {
          [...apiResponse] = this.$store.state.characters.length
            ? this.$store.state.characters
            : await this.$store.dispatch("getCharacters");
        }
        this.filteredData = apiResponse.splice(0, this.totalNumber);
        this.isFetching = false;
      } catch (error) {
        this.isFetching = false;
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.getCharacters();
  },
};
</script>
<style lang="scss" scoped></style>
