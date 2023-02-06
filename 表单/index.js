const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  methods: {
    handleSubmit(e) {
      // e.preventDefault();
      console.log(
        this.username,
        this.gender,
        this.interests,
        this.occupation,
        this.intro
      );
    },
  },
});
app.mount("#app");
