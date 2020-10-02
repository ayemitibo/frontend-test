<template>
  <div class="card-container">
    <template v-for="(item, index) in starShips">
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
      starShips: [],
    };
  },
  async mounted() {
    try {
      const apiResponse = this.$store.state.starShips.length
        ? this.$store.state.starShips
        : await this.$store.dispatch("getStarships");
      this.starShips = apiResponse.splice(0, this.totalNumber);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
