import { ref } from 'vue';
import { defineStore } from 'pinia';

import AuthService from '@/services/auth';
const authService = new AuthService();



export const useAuthStore = defineStore('auth', () => {
  const user = ref({});

  const islogged = ref(false)

  async function setToken(token) {
    try {
      user.value = await authService.postUserToken(token);
      islogged.value = true
    } catch (err) {
      console.log(err);
      islogged.value = false
    }
  }

  function unsetToken() {
    user.value = {};
  }

  return { user, setToken, unsetToken, islogged };
});
