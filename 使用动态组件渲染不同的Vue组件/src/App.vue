<script>
import RegisterForm from "./components/RegisterForm.vue";
import ProfileForm from "./components/ProfileForm.vue";
export default {
  components: {
    RegisterForm,
    ProfileForm,
  },
  data() {
    return {
      currentForm: "RegisterForm",
    };
  },
};
</script>

<template>
  <main>
    <div>
      <KeepAlive>
        <component :is="currentForm" />
      </KeepAlive>
      <div class="buttons">
        <button
          v-if="currentForm === 'RegisterForm'"
          @click="currentForm = 'ProfileForm'"
        >
          下一步
        </button>
        <template v-if="currentForm === 'ProfileForm'">
          <button @click="currentForm = 'RegisterForm'">上一步</button>
          <button>完成</button>
        </template>
      </div>
    </div>
  </main>
</template>

<style></style>
