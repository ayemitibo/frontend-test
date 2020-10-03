<template>
  <div class="about">
    <SectionTitle :sectionTitle="'Starwars Characters'" />
    <SearchField />
    <Characters :totalNumber="8" />
  </div>
</template>
<script>
import SectionTitle from "../components/SectionTitle";
import SearchField from "../components/SearchField";
import Characters from "../components/Character";
export default {
  components: {
    SectionTitle,
    Characters,
    SearchField,
  },
};
</script>
