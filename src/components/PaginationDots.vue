<template>
  <div class="owl-dots">
    <button role="button" class="owl-dot"><span></span></button
    ><button role="button" class="owl-dot active"><span></span></button
    ><button role="button" class="owl-dot"><span></span></button>
  </div>
</template>
<style lang="scss" scoped>
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

.owl-dot {
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
