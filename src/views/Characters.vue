<template>
  <div class="about">
    <SectionTitle :sectionTitle="'Starwars Characters'" />
    <div style="margin-bottom : 20px">
      <SearchField :searchText="'FILTER'" @getSelectedData="filterCharacter" />
      <SearchField :searchText="'GRID'" />
    </div>
    <Characters :totalNumber="8" ref="characters" />
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

  methods: {
    filterCharacter(item) {
      this.$refs.characters.filterCharacters(item);
    },
  },
};
</script>
