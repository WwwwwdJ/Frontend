<template>
  <p><TextCommpoent>TextCommpoent</TextCommpoent></p>
  <p>
    <TextCommpoent>
      <div>slot中的文本</div>
    </TextCommpoent>
  </p>
</template>

<script>
import TextCommpoent from "./TextCommpoent.vue";
export default {
  components: {
    TextCommpoent,
  },
};
</script>

<style scoped>
p {
  background-color: hsl(250deg, 50%, 50%);
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 20px;
}

.text {
  color: hsl(50deg, 100%, 50%);
}

.text :deep(a) {
  display: block;
  text-decoration: none;
  color: hsl(0deg, 80%, 70%);
}
</style>
