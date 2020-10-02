<template>
  <div class="gtco-testimonials card-container">
    <template v-for="(item, index) in planets">
      <PlanetCard :planet="item" :key="index" :index="index" />
    </template>
    <div class="owl-dots">
      <button role="button" class="owl-dot"><span></span></button
      ><button role="button" class="owl-dot active"><span></span></button
      ><button role="button" class="owl-dot"><span></span></button>
    </div>
  </div>
</template>
<script>
import PlanetCard from "./PlanetCard";
export default {
  data() {
    return {
      planets: [],
    };
  },
  components: {
    PlanetCard,
  },
  async mounted() {
    try {
      const apiResponse = this.$store.state.planets.length
        ? this.$store.state.planets
        : await this.$store.dispatch("getPlanets");
      this.planets = apiResponse.splice(0, 3);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style lang="scss" scoped>
.gtco-testimonials {
  position: relative;
  margin-top: 30px;
}
@media (max-width: 767px) {
  .gtco-testimonials {
    margin-top: 20px;
  }
}
.gtco-testimonials {
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 1;
}
owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 10px;
}
.owl-dots {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  margin-top: 16px;
}

.owl-dots .owl-dot {
  display: inline-block;
  zoom: 1;
  *display: inline;
}

.owl-dots .owl-dot.active span {
  background-color: black;
}

.gtco-testimonials .owl-nav button.owl-prev,
.gtco-testimonials .owl-nav button.owl-next,
.gtco-testimonials button.owl-dot {
  background: none;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
}
.owl-dot span {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  background: #d6d6d6;
  display: block;
  -webkit-backface-visibility: visible;
  transition: opacity 200ms ease;
  border-radius: 30px;
}
</style>
