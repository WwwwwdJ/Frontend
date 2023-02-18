<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  mounted() {
    throw new Error("AppListItem组件异常");
  },
};
</script>

<style scoped></style>
