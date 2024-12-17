<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});

</script>

<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="header-section">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <div class="querendo">
        <h1>Querendo realizar seu sonho?</h1>
      </div>
        <div class="wrap">
        <router-link to="/login">
          <button class="contact-button mr">Página de Login</button>
        </router-link>
        <router-link to="/">
        <button class="contact-button mr">Página Inicial</button>
      </router-link>
        <router-link to="/imoveis/adicionar">
          <button class="contact-button">Adicionar Imovel</button>
        </router-link>
      </div>      </div>
      <div class="contact-section">
        <h3>Contato</h3>
        <ul>
          <li><i class="fas fa-map-marker-alt"></i> Av Do Principe, 1186, Itapema do Norte - SC</li>
          <li><i class="fas fa-envelope"></i> rfconsultoriaimobiliaria@outlook.com.br</li>
          <li><i class="fas fa-phone"></i> (47) 3443-3178</li>
          <li><i class="fas fa-whatsapp"></i> (47) 99684-3087</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
.querendo{
  
}

.footer-container {
  background-color: #f58220; /* cor laranja */
  padding: 40px;
  color: white;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-section {
  margin-bottom: 30px;
}

.logo {
  width: 100px;
}

.contact-button {
  background-color: #003354; /* cor azul escura */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
}

.contact-section {
  background-color: #003354; /* cor azul escura */
  padding: 20px;
  color: white;
}

.contact-section ul {
  list-style: none;
  padding: 0;
}

.contact-section li {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.contact-section i {
  margin-right: 10px;
}
</style>



<!-- <template>
  <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <RouterLink to="/login">
      <i class="mdi mdi-account" />
      Login
    </RouterLink>
  </div>
  <div class="icons">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <RouterLink to="/">
      <i class="mdi mdi-account-circle-outline" />
      Perfil
    </RouterLink>
    <RouterLink to="/">
      <i class="mdi mdi-cart-outline" />
      Carrinho
    </RouterLink>

    <div class="hamburger" @click="showMenu = !showMenu">
      <i class="mdi mdi-menu" />
      Menu
    </div>
  </div>
</template>

<style scoped>
#footerMenu {
    position: fixed;
    bottom: 15%;
    right: 0;

    width: 20%;
    border-top: #EEEEEE 1px solid;
    background-color: white;

    display: block;
    padding: 1rem;
}

#footerMenu a {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-decoration: none;
    color: #282828;
    font-size: 1rem;
    transition: color 0.3s;
}


.icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.icons a,
.icons .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #282828;
    font-size: 1rem;
    transition: color 0.3s;
}

.hamburger:hover {
    cursor: pointer;
}
</style> -->
