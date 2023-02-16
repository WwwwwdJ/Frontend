<script>
import TextHeading from "./components/TextHeading.vue";
export default {
  components: {
    TextHeading,
  },
};
</script>

<template>
  <main>
    <div>
      <TextHeading level="1">一级标题</TextHeading>
      <TextHeading level="2">二级标题</TextHeading>
      <TextHeading level="3">三级标题</TextHeading>
      <TextHeading level="4">四级标题</TextHeading>
      <TextHeading level="5">五级标题</TextHeading>
      <TextHeading level="6">六级标题</TextHeading>
    </div>
  </main>
</template>
