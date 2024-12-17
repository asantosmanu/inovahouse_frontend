<script setup>
import MButton from '@/components/MButton.vue'
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const { islogged, user } = useAuthStore()

onMounted(() => 
{
  console.log(islogged);
  
}
)
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
          <m-button texto="Home" class="m-button"/>
        </router-link>
        <!-- <router-link to="/buscar/imoveis">
          <m-button texto="Buscar Imoveis" class="m-button"/>
        </router-link> -->
        <router-link to="/imoveis/adicionar">
          <m-button texto="Adicionar Imovel" class="m-button"/>
        </router-link>
        <router-link to="/login">
          <m-button texto="Página de Login" class="m-button"/>
        </router-link>
      </div>
      <div class="divider" />
    </div>
  </div>

  <!-- <div class="icons">
    
    <i class="mdi mdi-magnify" />
    <i class="mdi mdi-account-circle-outline" />
    <i class="mdi mdi-cart-outline" />
  
  </div> -->
</template>

<style scoped>
.m-button{
  color: white;
  height: 50px;
  border-radius: 2%;
}
.top-header {
  padding: 30px 10px 10px 200px;
  background-color: #02193c;
  display: flex;
}

.bem {
  font-weight: bold;
}

.infouser {
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.login {
  margin-left: 50px;
  height: 40px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.imovel {
  margin-left: 50px;
  height: 40px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.home {
  margin-left: 20px;
  height: 40px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.header-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -80px;
}

.mr {
  margin-right: 10px;
}

button {
  background-color: #f28a31;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
}

button:hover {
  background-color: #f8caa7;
}

/* .menu{
  margin-top: -90px;
  margin-bottom: 40px;
  margin-left: 200px; 
  background-color: #ff8c32; 
  padding: auto;
} */
.logo {
  width: 100px;
  margin-left: 60px;
  margin-top: 30px;

}

.icons {
  display: flex;
  gap: 1rem;
  align-items: end;
  justify-content: end;
  font-size: 2rem;
  border: 2px solid red;
  width: 100%;
  gap: 1rem;
}
</style>
