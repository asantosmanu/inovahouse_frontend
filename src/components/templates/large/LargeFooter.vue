<script setup>

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
  <div>
    <!-- Seção Amarela com a Mensagem -->

    
    <section class="header-banner">
       <div class="logo1">
          <img src="@/assets/logo.png" alt="Logo" />
           <!-- <h2>Consultoria Imobiliária</h2>  -->
        </div> 
        <div class="querendo">
      <h1>Querendo realizar seu sonho?</h1>
    </div>
      <div class="wrap">
      
        <router-link to="/">
        <button class="contact-button mr">Página Inicial</button>
      </router-link>
        <router-link to="/imoveis/adicionar" v-if="islogged">
          <button class="contact-button">Adicionar Imovel</button>
        </router-link>
        <router-link to="/login"  v-else>
          <button class="contact-button mr">Página de Login</button>
        </router-link>
      </div>
      <!-- <div class="contact-button" @click="$router.push({ name: '/' })"> -->
        <!-- Página Inicial -->
      <!-- </div> -->
    </section>

    <!-- Rodapé -->
    <footer class="footer">
      <div class="container">
        <!-- <div class="logo1"><img src="@/assets/logo.png" alt="Logo" /></div> -->
        
        <div class="content">
          <div class="contact">
            <h3>Contato</h3>
            <p>Av Do Príncipe, 1186, Itapema do Norte - Itapoá / SC</p>
            <p>Email: rfconsultoriaimobiliaria@outlook.com.br</p>
            <p>Tel: (47) 3443-3178</p>
            <p>WhatsApp: (47) 99684-3087</p>
          </div>
          <div class="link">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Buscar imóveis</a></li>
            </ul>
          </div>
          <div class="contact-form">
            <h3>Entramos em Contato</h3>
            <p>
              Ficou com dúvida de como alugar ou comprar o seu imóvel, entre
              em contato, digite o seu email.
            </p>
            <input type="email" placeholder="Email..." />
            <button>Enviar</button>
            <p>Ao informar meus dados, eu concordo com a Política de Privacidade.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.wrap{
  margin-top: 50px;
}
.querendo{
  margin-top: -120px;
}

.logo1 {
  display: flex;
  height: 100px;
  margin-top: 25px;
  margin-bottom: -70px;
  margin-left: 67px;
}
/* Estilo da Seção Amarela */
.header-banner {
  background-color: #ff8c32;
  text-align: center;
  padding: 40px 0;
  color: white;
}
.header-banner h1 {
  margin: 0;
  font-size: 2rem;
}
.contact-button {
  background-color: #e07626;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
}
.contact-button:hover {
  background-color: #ff8c32;
  color: white;
}

/* Estilo do Rodapé */
.footer {
  background-color: #00204a;
  color: white;
  padding: 40px 0;
}
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.logo h2 {
  color: #ff8c32;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}
.contact-form{
  margin-left: 100px;
}
.link{
  margin-left: 100px;
}
.contact {
  flex: 1;
  margin: 10px;
  margin-left: -50px;
}
h3 {
  color: #ff8c32;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.contact-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}
button {
  background-color: #ff8c32;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #e07626;
}
.mr{
  margin-right: 10px;
}
</style>
