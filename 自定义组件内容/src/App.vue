<script>
import MessageItem from "./components/MessageItem.vue";
export default {
  components: {
    MessageItem,
  },
};
</script>

<template>
  <main>
    <div>
      <MessageItem sender="张三" msg="你好" time="20:01" />
      <MessageItem sender="张三" msg="你好" time="20:01" />
      <MessageItem sender="张三" msg="你好" time="20:01" />
    </div>
  </main>
</template>
