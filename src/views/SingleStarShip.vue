<template>
  <div>
    <SingleStarShipHeader :imageUrl="`assets/images/starship-1.jpg`" />
    <div class="container-fluid">
      <div style="width : 50%;margin : 0 auto">
        <h2>{{ $route.params.name }}</h2>
        <div v-if="starShip">
          <p>Cargo Capacity : {{ starShip.cargo_capacity }}</p>
          <p>consumables : {{ starShip.consumables }}</p>
          <p>Cost in Credit : {{ starShip.cost_in_credits }}</p>
          <p>Crew : {{ starShip.crew }}</p>
          <p>hyperdrive Rating : {{ starShip.hyperdrive_rating }}</p>
          <p>Manufacturer : {{ starShip.manufacturer }}</p>
          <p>Max Atmosphering Speed : {{ starShip.max_atmosphering_speed }}</p>
          <p>Model : {{ starShip.model }}</p>
          <p>Passengers : {{ starShip.passengers }}</p>
          <p>Starship Class : {{ starShip.starship_class }}</p>
        </div>
        <div class="recently-viewed">
          Recently Viewed Starships
        </div>
      </div>
      <hr />
      <StarshipComponent :totalNumber="3" />
      <PaginationDots />
    </div>
  </div>
</template>
<script>
import StarshipComponent from "../components/StarShips";
import SingleStarShipHeader from "../components/SingleStarShipHeader";
import PaginationDots from "../components/PaginationDots";
export default {
  components: {
    SingleStarShipHeader,
    StarshipComponent,
    PaginationDots,
  },
  data() {
    return {
      filteredText: "",
      starShip: {},
    };
  },
  async mounted() {
    let [...starShip] = this.$store.state.starShips;
    this.starShip = starShip.filter((item) => {
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
