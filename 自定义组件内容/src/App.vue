<template>
  <main>
    <div>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      />
    </div>
  </main>
</template>

<script>
import MessageItem from "./components/MessageItem.vue";
export default {
  components: {
    MessageItem,
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          sender: "张三",
          msg: "你好",
          time: "20:01",
        },
        {
          id: 2,
          sender: "张三",
          msg: "你好",
          time: "20:01",
        },
        {
          id: 3,
          sender: "张三",
          msg: "你好",
          time: "20:01",
        },
      ],
    };
  },
};
</script>
