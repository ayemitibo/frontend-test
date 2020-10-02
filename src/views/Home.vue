<template>
  <div class="home">
    <h2>Popular Starships</h2>
    <SpaceshipComponent />
    <ViewMoreButton />
    <h2>Popular Planets</h2>
    <Planet />
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceshipComponent from "../components/StarShips";
import ViewMoreButton from "../components/Button";
import Planet from "../components/Planet";
export default {
  name: "Home",
  components: {
    SpaceshipComponent,
    ViewMoreButton,
    Planet,
  },
};
</script>
<style lang="scss" scoped>
$color-dark: #5a5858;

.home {
  color: $color-dark;
  h2 {
    text-align: center;
    position: relative;
    font-weight: 600;
    font-size: 24px;
    padding-bottom: 15px;
  }
  h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 5px;
    background: $color-dark;
    width: 72px;
    transform: translate(-50px, 0);
  }
}
</style>
