<template>
  <ul class="page">
    <p>{{ start }}-{{ end }} of 50</p>
    <li class="page__btn" @click="previous">
      <a class="previous">&#8249;</a>
    </li>
    <li class="page__btn" @click="next">
      <a class="next">&#8250;</a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      start: 1,
      end: 8,
      endNumber: 7,
      endStart: 1,
    };
  },
  methods: {
    previous() {
      if (this.start > this.endStart) {
        this.start = this.start - 1;
        this.end = this.end - 8;
        this.$emit("next", this.start);
      } else {
        return;
      }
    },
    next() {
      if (this.start < this.endNumber) {
        this.start = this.start + 1;
        this.end = this.end + 8;
        this.$emit("next", this.start);
      } else {
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
:root {
  --primary: #23adad;
  --greyLight: #23adade1;
  --greyLight-2: #cbe0dd;
  --greyDark: #2d4848;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

ul {
  list-style-type: none;
}

.items-list {
  max-width: 90vw;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  justify-content: center;
  align-content: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: white;
  border: 1px solid black;
  color: black;
  border-radius: 3px 0 0 3px;
}

.next {
  background-color: white;
  border: 1px solid black;
  color: black;
  border-radius: 0 3px 3px 0;
}

.round {
  border-radius: 50%;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border-radius: 0.6rem;
  background: #ffffff;
}
</style>
