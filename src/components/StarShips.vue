<template>
  <div class="card-container">
    <Loader v-if="isFetching" :itemToShow="totalNumber" :widthSize="'33.3%'" />
    <template v-for="(item, index) in starShips" v-else>
      <StarshipsCard :starShip="item" :index="index" :key="index" />
    </template>
  </div>
</template>
<script>
import StarshipsCard from "./StarshipsCard";
export default {
  components: {
    StarshipsCard,
  },
  props: {
    totalNumber: {
      type: Number,
    },
  },
  data() {
    return {
      filteredData: [],
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
    starShips: {
      get() {
        let { starShips, filteredText } = this.$store.state;
        if (filteredText) {
          starShips = starShips.filter((item) => {
            return item.name.toLowerCase().includes(filteredText.toLowerCase());
          });
          return starShips;
        } else if (this.gender) {
          starShips = starShips.filter((item) => {
            return item.gender == this.gender;
          });
          return starShips;
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
    async getStarShips(page) {
      try {
        this.isFetching = true;
        let apiResponse;
        if (page) {
          [...apiResponse] = await this.$store.dispatch("getStarships", page);
        } else {
          [...apiResponse] = this.$store.state.starShips.length
            ? this.$store.state.starShips
            : await this.$store.dispatch("getStarships");
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
    await this.getStarShips();
  },
};
</script>
