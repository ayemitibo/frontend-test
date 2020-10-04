<template>
  <div>
    <div
      class="nav"
      :style="
        `backgroundImage: linear-gradient(transparent,transparent), url(${imageUrl}),url(assets/images/hero-banner.jpg)`
      "
    >
      <div>
        <header>
          <nav class="navbar fixed-top">
            <div class="container">
              <img src="assets/images/logo.png" alt="" />
            </div>
          </nav>
        </header>

        <div class="content-header">
          <div class="bordered bordered-right"></div>
          <div style="margin-left: auto;margin-right: auto;">
            <h2>Correlian Scout</h2>
          </div>
          <div class="bordered bordered-left"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
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

.nav {
  background-size: cover, contain, cover;
  background-position: center;
  position: relative;
}

.container-fluid {
  width: 80%;
  position: relative;
  margin: 40px auto 0 auto;
}

.bordered {
  width: 30px;
  border: 2px solid white;
  height: 50px;
}

.bordered-left {
  border-left: 0;
}

.bordered-right {
  border-right: 0;
}

$color-dark: #333333;
.container {
  img {
    @include marginProperty(20px 0 0 20px, 100px, null);
  }
}

.content-header {
  color: white;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  bottom: 10%;
  left: 10%;
}
</style>
