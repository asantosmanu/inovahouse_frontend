<script setup>
import MButton from '@/components/MButton.vue'
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
const authStore = useAuthStore()


</script>
<template>
  <div class="top-header">
  </div>
  <img src="@/assets/logo.png" alt="Logo" class="logo" />


  <div class="header-content">
    <!-- <img src="@/assets/logo.png" alt="Logo" class="logo" /> -->
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
.menu{
  margin-top: 10px;
  margin-bottom: 30px;
  /* margin-left: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #ff8c32; */
  padding: auto;  
}
.top-header {
  padding: 20px 10px 10px 200px;
  background-color: #02193c;
  display: flex;
}

.logo {
  width: 35%;
  margin-left: 30%;
}

.botao {
  display: flex;
  align-items: center;
  background-color: #f28a31;
  color: black;
  width: 90%;
  max-width: 300px;
  margin: 10px 0;
  padding: 12px;
  border: 2px solid #f28a31;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  padding: 10px 20px;
}

.botao:hover {
  background-color: #d46b26;
  /* Laranja mais escuro no hover */
  transform: scale(1.03);
  /* Leve crescimento no hover */
}

.form {
  display: flex;
  flex-direction: column;
  /* Elementos em coluna */
  align-items: center;
  /* Centraliza os itens */
  padding: 20px;
  border-top: 7px solid #f28a31;
  background-color: #102442;
  opacity: 90%;
  width: 90%;
  /* Ocupa 90% da tela */
  max-width: 400px;
  /* Largura máxima em telas maiores */
  margin: 20px auto;
  /* Centraliza o formulário */
  border-radius: 10px;
  /* Bordas arredondadas */
}

.caixinha1 {
  width: 100%;
  max-width: 300px;
  padding: 0 10px;
  margin: 10px 0;
  background-color: #01081d80;
  height: 38px;
  line-height: 38px;
  font-family: sans-serif;
  color: white;
  font-size: 15px;
  text-align: center;
}

.inner-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.banner1 {
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}

.banner1 img {
  max-width: 100px;
  height: auto;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .form {
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  .form {
    max-width: 400px;
    /* Largura fixa em desktops */
  }
}
</style>
