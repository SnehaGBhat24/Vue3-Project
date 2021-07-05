<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Recipes Center</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <input class="input is-large" type="email" placeholder="Email" v-model="data.email">
        <input class="input is-large" type="password" placeholder="Password" v-model="data.password">
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success is-medium" @click="login">Sign-Up</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive } from "vue";
import { useStore } from 'vuex';

export default {
  name: "Login",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      email: '',
      password: '',
      bookmarks: [],
    })
    const login = () => {
      store.commit('login', { email: data.email });
      router.push('/recipes');
    }
    return {
      login,
      data,
    }
  }
};
</script>

<style scoped>
.modal-card {
  height: 40vh !important;
}
.input {
  margin-top: 3.5vh !important;
}
.modal-background {
  background-color: lightgray !important;
}
</style>

