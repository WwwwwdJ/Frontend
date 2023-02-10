const app = Vue.createApp({
  data() {
    return {
      textClass: "text-blue",
      stateClass: "danger",
      isHidden: "false",
    };
  },
});
app.mount("#app");
