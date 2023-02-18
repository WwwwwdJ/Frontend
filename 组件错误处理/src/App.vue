<script>
import AppList from "./components/AppList.vue";

export default {
  components: {
    AppList,
  },
  data() {
    return {
      data: [1, 2, 3],
      error: false,
    };
  },
  errorCaptured() {
    this.error = true;
    return false;
  },
};
</script>

<template>
  <main>
    <p v-if="error">顶级组件异常</p>
    <AppList v-else :data="data" />
  </main>
</template>

<style scoped></style>
