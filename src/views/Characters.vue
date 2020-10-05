<template>
  <div class="about">
    <SectionTitle :sectionTitle="'Starwars Characters'" />
    <div style="margin-bottom : 20px">
      <SearchField :searchText="'FILTER'" @getSelectedData="filterCharacter" />
    </div>
    <Characters :totalNumber="8" ref="characters" />
    <PaginationButton @next="nextCharacters" />
  </div>
</template>
<script>
import SectionTitle from "../components/SectionTitle";
import SearchField from "../components/SearchField";
import PaginationButton from "../components/Pagination";
import Characters from "../components/Character";
export default {
  components: {
    SectionTitle,
    Characters,
    SearchField,
    PaginationButton,
  },

  methods: {
    filterCharacter(item) {
      this.$refs.characters.gender = item;
    },
    nextCharacters(page) {
      this.$refs.characters.getCharacters(page);
    },
  },
};
</script>
