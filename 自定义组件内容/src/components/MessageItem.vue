<template>
  <div>
    <p>{{ sender }}</p>
    <p>{{ time }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: ["sender", "msg", "time"],
  mounted() {
    console.log(this.sender);
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-areas:
    "sender time"
    "msg msg";
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  padding: 1em;
  width: 250px;
  margin-bottom: 1px;
}
</style>
