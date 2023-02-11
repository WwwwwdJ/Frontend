<template>
  <main>
    <div>
      <!-- <ButtonWithProps :onclick="handleClick" /> -->
      <ButtonWithProps />
      <!-- <ButtonWithEmits @customClick="handleClick" /> -->
      <ButtonWithEmits />
    </div>
  </main>
</template>

<script>
import ButtonWithProps from "./components/ButtonWithProps.vue";
import ButtonWithEmits from "./components/ButtonWithEmits.vue";

export default {
  components: {
    ButtonWithProps,
    ButtonWithEmits,
  },
  methods: {
    handleClick(value) {
      alert(value);
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
