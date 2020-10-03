<template>
  <div>
    <header>
      <nav class="navbar fixed-top">
        <div class="container">
          <img src="assets/images/logo.png" alt="" />
        </div>
      </nav>
    </header>

    <div class="content">
      <div style="margin-left: auto;margin-right: auto;">
        <div style="display: flex;">
          <img src="assets/images/logo.png" alt="" />
          <h1 class="content-text">Directory</h1>
        </div>
        <hr />
      </div>
      <p>
        Find your favourites Characters, Films, Species, Starships and Planets
      </p>
      <div class="search-container">
        <div class="element-container">
          <div class="input-container">
            <div class="icon-container">
              &#128269;
            </div>
            <div class="input-field">
              <input
                type="text"
                v-model="filteredText"
                name=""
                @input="searchField"
                id=""
                placeholder="Enter a search item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filteredText: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.filteredText = "";
      },
    },
  },
  methods: {
    searchField() {
      let inputData = this.filteredText;
      this.$store.dispatch("seachField", inputData);
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin marginProperty($m, $w, $h) {
  margin: $m;
  width: $w;
  height: $h;
}

::-webkit-input-placeholder {
  /* Edge */
  margin-left: 15px;
}

$color-dark: #333333;
.container {
  img {
    @include marginProperty(20px 0 0 20px, 100px, null);
  }
}

.content {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
    @include marginProperty(null, 100px, 50px);
  }
  .content-text {
    @include marginProperty(0 0 0 15px, null, null);
    font-weight: 400;
  }
  hr {
    border: none;
    @include marginProperty(null, 100%, 1px);
    background: white;
  }
  .search-container {
    @include marginProperty(null, 100%, null);
  }

  .element-container {
    @include marginProperty(30px 0 0 0, null, null);

    .input-container {
      width: 100%;
      padding: 5px;
      // border: 2px $color-dark solid;
      border-radius: 5px;
      background: #f4f4f4;

      display: flex;

      .icon-container {
        padding: 5px;
        text-align: center;
        margin-left: 19px;
        color: $color-dark;
      }
      .input-field {
        width: 100%;

        input {
          outline: none;

          border: 0px;
          @include marginProperty(null, 100%, 40px);

          background: transparent;
          padding-left: 20px;
          font-size: 14px;
          color: $color-dark;
        }

        .cancel-button {
          display: none;
          font-family: Arial;
          color: $color-dark;
        }

        input:focus {
          width: 83%;
        }

        input:focus + .cancel-button {
          display: inline-block;
        }
      }
    }
  }
}
</style>
