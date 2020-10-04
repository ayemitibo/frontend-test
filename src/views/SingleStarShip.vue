<template>
  <div>
    <SingleStarShipHeader />
  </div>
</template>
<script>
import SingleStarShipHeader from "../components/SingleStarShipHeader";
export default {
  components: {
    SingleStarShipHeader,
  },
  data() {
    return {
      filteredText: "",
    };
  },
};
</script>
