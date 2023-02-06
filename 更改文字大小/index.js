const app = Vue.createApp({
  data() {
    return {
      fontSize: 16,
    };
  },
  computed: {
    pStyle() {
      return {
        color: "white",
        fontSize: this.fontSize + "px",
      };
    },
  },
});
app.mount("#app");
