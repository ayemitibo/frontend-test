<template>
  <div class="mt-4">
    FILTER :
    <select>
      <option>choose option</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
</template>
<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  padding-right: 20px;
}
select::-ms-expand {
  display: none;
}

.mt-4 {
  margin-bottom: 20px;
}

//Add an SVG background
select {
  box-sizing: border-box;
  height: 30px;
  padding: 0 20px;
  background-image: url("data:image/svg+xml,%3Csvg version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px width=10px height=10px viewBox=0 0 10 10 enable-background=new 0 0 10 10 xml:space=preserve%3E%3Cpolygon points=7,3.5 5,6.5 3,3.5 /%3E%3C/svg%3E");
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
