<template>
  <div id="app">
    <transition mode="out-in" name="slide">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>
<style lang="scss" scoped></style>
