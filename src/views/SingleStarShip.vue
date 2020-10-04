<template>
  <div>
    <SingleStarShipHeader :imageUrl="`assets/images/starship-1.jpg`" />
    <div class="container-fluid">
      <div style="width : 50%;margin : 0 auto">
        <h2>{{ $route.params.name }}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, neque!
          Modi inventore veniam recusandae beatae asperiores? Ad expedita rem
          cum eligendi distinctio exercitationem illum? Laudantium at deleniti
          possimus officia eum?
        </p>
        <p>
          Ad dolore minim nulla dolore adipisicing sunt nulla. Aute aliquip
          consectetur ad adipisicing dolore ex labore ullamco excepteur ex ut id
          nisi eu. Ipsum dolor enim anim laboris aliqua qui exercitation labore
          et. Laborum enim non esse commodo adipisicing reprehenderit tempor
          cupidatat. Incididunt minim laborum reprehenderit quis tempor pariatur
          ad. Pariatur elit sint quis eiusmod deserunt. Ad nulla sunt consequat
          dolore esse. Reprehenderit non amet sunt laboris proident esse velit
          aliqua laborum ea exercitation. In cillum excepteur tempor adipisicing
          fugiat irure deserunt veniam deserunt id sit elit labore. Do nulla
          aliquip exercitation cupidatat voluptate cillum id minim in ea.
        </p>
        <p>
          Commodo ad incididunt nulla eu ullamco velit consectetur deserunt
          nulla non aliqua. Labore et reprehenderit reprehenderit nostrud sunt
          excepteur consequat consectetur deserunt ipsum mollit id non. Veniam
          est amet exercitation fugiat duis nostrud aliquip aliqua non est.
          Adipisicing elit veniam quis et excepteur esse ut fugiat qui Lorem in.
          Sit anim Lorem amet labore consequat ea officia commodo esse ea.
          Ullamco cupidatat fugiat sit quis adipisicing amet nisi occaecat.
          Aliqua enim fugiat culpa occaecat quis sunt non aute non exercitation.
          Do id incididunt irure esse sint deserunt. Nulla occaecat est non duis
          fugiat sit minim esse ullamco duis deserunt nisi. Veniam cillum duis
          dolor sint enim ad occaecat est mollit qui. Voluptate eiusmod duis
          occaecat qui commodo deserunt ea sint voluptate. Occaecat officia
          mollit amet magna et minim do duis velit in nisi irure. Excepteur
          Lorem eiusmod voluptate ad voluptate aliquip id esse commodo qui
          reprehenderit ad.
        </p>
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
    };
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
