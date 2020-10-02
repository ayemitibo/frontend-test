<template>
  <div class="col-md-4">
    <div class="card">
      <div
        class="cardTop"
        :style="
          `backgroundImage: url(/assets/images/starship-${1 + index}.jpg)`
        "
      ></div>
      <div class="cardBottom">
        <div class="cardText">
          <!--       Title and description will always show -->
          <p class="cardTitle">{{ starShip.name }}</p>
          <h4 class="cardInfo">Short Description</h4>
          <div class="stage">
            <a href="#">Read More</a>
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
<style scoped>
.card {
  background: white;
  margin-top: 40px;
  height: auto;
  width: 100%;
  transition: 0.6s all ease;
  margin-left: auto;
  margin-right: auto;
}

.card-link {
  height: 30px;
}

/* I used background url to allow me to change the height and width without needing extra css */

.cardTop {
  transition: 0.4s all ease;
  height: 230px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.cardBottom {
  height: 35%;
  text-wrap: normal;
  transition: 0.4s all ease;
  background: #ababab26;
  box-shadow: -5px 5px #e4e4e4;
}

.stage {
  text-align: right;
}
a {
  line-height: 1em;
  letter-spacing: 0.06em;
  font-weight: 300;
  font-size: 13px;
  text-decoration: none;
  color: black;
  background: #8c8385;
  display: inline-block;
  padding: 15px 12px 15px 15px;
  transition: background 200ms;
}
a:hover {
  color: #fff;
  background: #231f20;
}
a:after {
  font-weight: 300;
  content: "\2192";
  margin-left: 20px;
  font-size: 18px;
  vertical-align: middle;
  transition: color 200ms;
}

a:hover:after {
  color: white;
}

.cardText {
  min-height: 100%;
  padding: 20px;
}

.cardTitle {
  font-size: 15px;
  font-weight: 500;
}

.cardInfo {
  padding-top: 10px;
  font-size: 18px;
  font-weight: 500;
  color: orange;
}

/* Hidding the entire so anything we put in will only show on hover */

.cardHoverText {
  visibility: hidden;
}

/* Hover affects */

/* Using className + hover followed by child element allows you to change child elements when parent is hovered */
</style>
