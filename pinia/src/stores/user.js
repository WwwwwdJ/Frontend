import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "name",
    phone: "1234567890",
    email: "test@test.com",
  });

  function isLoggedIn() {
    return user.value !== null;
  }

  return {
    user,
    isLoggedIn,
  };
});
