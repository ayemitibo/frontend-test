<template>
  <div class="col-md-6 movie-card" data-movie="Blade Runner">
    <div class="movie-card-container">
      <div
        class="movie-card__overlay"
        :style="
          `backgroundImage : url(assets/images/character-${
            1 + index <= 3 ? 1 + index : Math.ceil(Math.random() * 4)
          }.jpg)`
        "
      ></div>
      <div class="movie-card__content">
        <h2>{{ character.name }}</h2>
        <p class="movie-card__desc">Gender : {{ character.gender }}</p>
        <p class="movie-card__desc">Birth Year : {{ character.birth_year }}</p>
        <p class="movie-card__desc">Hair Color : {{ character.hair_color }}</p>
        <router-link :to="`/character/${character.name}`"
          >Read More</router-link
        >
        <!-- <button class="btn btn-outline movie-card__button" type="button">
          Watch Trailer
        </button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    character: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}

button {
  font-family: inherit;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
}

.movie-card {
  height: 300px;
  padding: 0 20px 20px 0;
}

.col-md-6 {
  width: 50%;
}
.movie-card__overlay {
  background-size: cover;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  /* text-align: left; */
  width: 60%;
}
.movie-card__content {
  margin-left: 15px;
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 18px;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
}
.movie-card-container {
  display: flex;
  height: 100%;
  background: #ababab26;
}
a {
  text-align: end;
  line-height: 1em;
  letter-spacing: 0.06em;
  font-weight: 300;
  font-size: 13px;
  text-decoration: none;
  color: black;
  background: transparent;
  padding: 15px 12px 15px 15px;
  /* transition: background 200ms; */
}
</style>
