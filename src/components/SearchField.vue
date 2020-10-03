<template>
  <div class="mt-4">
    {{ searchText }}
    <select @change="selectFile" v-model="selected">
      <option value="">choose option</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  props: {
    searchText: {
      type: String,
    },
  },
  methods: {
    selectFile() {
      this.$emit("getSelectedData", this.selected);
    },
  },
};
</script>
<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  padding-right: 20px;
}
select::-ms-expand {
  display: none;
}

.mt-4 {
  display: inline;
}

//Add an SVG background
select {
  box-sizing: border-box;
  height: 30px;
  padding: 0 20px;
  background-repeat: no-repeat;
  background-position: right center;
  background-position: calc(100% - 6px) center;
  border-radius: 8px;
}

//But don't hide select box arrows in IE9
@media all and (min-width: 0\0) and (min-resolution: 0.001dpcm) {
  select {
    background-image: none;
  }
}
</style>
