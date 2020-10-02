<template>
  <div class="about">
    <SectionTitle :sectionTitle="'Starwars Characters'" />
    <Characters :totalNumber="8" />
  </div>
</template>
<script>
import SectionTitle from "../components/SectionTitle";
import Characters from "../components/Character";
export default {
  components: {
    SectionTitle,
    Characters,
  },
};
</script>
