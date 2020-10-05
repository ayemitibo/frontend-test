<template>
  <div class="col-md-4">
    <div class="card">
      <div
        class="cardTop"
        :style="
          `backgroundImage: url(assets/images/starship-${
            index <= 5 ? 1 + index : Math.ceil(Math.random() * 4)
          }.jpg)`
        "
      ></div>
      <div class="cardBottom">
        <div class="cardText">
          <!--       Title and description will always show -->
          <p class="cardTitle">{{ starShip.name }}</p>
          <p>model : {{ starShip.model }}</p>
          <p>capacity : {{ starShip.cargo_capacity }}</p>
          <div class="stage">
            <router-link tag="a" :to="`/starship/${starShip.name}`"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    starShip: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
};
</script>
