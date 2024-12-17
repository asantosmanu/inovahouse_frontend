<script setup>
import MButton from '@/components/MButton.vue'
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
const authStore = useAuthStore()
</script>

<template>
  <div class="top-header">

  </div>
  <!-- <div class="icons"> -->
  <!-- <i class="mdi mdi-magnify" /> -->
  <!-- </div> -->

  <div class="header-content">
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <div class="logo_and_menu">
      <logo-title class="mb-2" />
      <div class="divider" />
      <div class="menu">
        <router-link to="/">
          <m-button texto="Home" />
        </router-link>
        <router-link to="/imoveis/adicionar" v-if="authStore.islogged">
          <m-button texto="Adicionar Imovel" />
        </router-link>
        <router-link to="/login" v-else>
          <m-button texto="Página de Login" />
        </router-link>
      </div>
      <div class="divider" />
    </div>
  </div>
</template>

<style scoped>
.infouser {
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-right: 250px;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.top-header {
  padding: 30px 10px 10px 200px;
  background-color: #02193c;
  display: flex;
}

.mr {
  margin-right: 10px;
}

button {
  background-color: #ff8c32;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 30px;
}

button:hover {
  background-color: #f8caa7;
}

.menu {
  margin-top: -90px;
  margin-bottom: 40px;
  margin-left: 200px;
  /* background-color: #ff8c32; */
  padding: auto;
}

.logo {
  width: 100px;
  margin-left: 30px;
  margin-top: 30px;
}

/* .icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.7rem;
} */
</style>
