<template>
  <div class="col-md-6 movie-card" data-movie="Blade Runner">
    <div class="movie-card-container">
      <div
        class="movie-card__overlay"
        :style="
          `backgroundImage : url(assets/images/character-${1 + index}.jpg)`
        "
      ></div>
      <div class="movie-card__content">
        <h2>{{ character.name }}</h2>
        <p class="movie-card__desc">
          A blade runner must pursue and try to terminate four replicants who
          stole a ship in space and have returned to Earth to find their
          creator.
        </p>
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
}
.movie-card-container {
  display: flex;
  height: 100%;
  background: #ababab26;
}
</style>
