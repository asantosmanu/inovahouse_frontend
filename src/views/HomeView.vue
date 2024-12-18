<script setup>
import ImovelList from '@/components/ImovelList.vue';
import { useImoveisStore } from '@/stores/imovel';

import { onMounted, ref } from 'vue';
import { formatPrice } from '@/helpers/format';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const imovelStore = useImoveisStore()
const imoveis = ref([])


onMounted(async () => {
  const authToken = localStorage.getItem('psg_auth_token')
  await authStore.setToken(authToken);
  await imovelStore.getImoveis()
  imoveis.value = imovelStore.imoveis
  // getUserInfoe();
});
</script>

<template>
  <div class="banner1">
    <div class="shadow"></div>
    <div class="inner-text">
    </div>
    <div class="form">

        
        
        <select class="caixinha1" v-on:keypress="ok = false" v-model="imovelStore.filtros.quartos">
          <option value="0" disabled selected>Quartos</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="10">mais</option>
        </select>
        
        <select class="caixinha1" v-on:keypress="ok = false" v-model="imovelStore.filtros.banheiros">
          <option value="0" selected disabled>Banheiros</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">mais</option>
        </select>
        
        <select class="caixinha1" v-on:keypress="ok = false" v-model="imovelStore.filtros.suite">
          <option value="0" selected disabled>Suite</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">mais</option>
        </select>
        
        
        <select class="caixinha1" v-on:keypress="ok = false" v-model="imovelStore.filtros.metragem">
          <option value="0" selected disabled>Metragem</option>
          <option value="10">10</option>
          <option value="40">40</option>
          <option value="10000000">mais</option>
        </select>
        
        <select class="caixinha1" v-on:keypress="ok = false" v-model="imovelStore.filtros.categoria">
          <option value="0" selected disabled>Categoria</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="10">mais</option>
        </select>
        
        <button class="botao" @click="$router.push({ name: 'BuscarImoveis' })">BUSCAR</button>
      </div>
      
    </div>
  
    
    <div class="imovel">
      <ImovelList />
    </div>
    <div>
    <div v-for="imovel in imoveis" :key="imovel.id" class="imovel-card">
      <div class="containerImovel">
        <div class="imovel-img-wrapper">
          <img :src="imovel.foto?.url" alt="imovel.name" />
          <i class="mdi mdi-heart-outline"/>
        </div>
        <div class="details">
          <ul>
            <div class="imovel-title">
              <h3>{{ (imovel.nome) }}</h3>
            </div>
            <div class="writes-cards">
              <div class="imovel-price">
                <p>{{ formatPrice(imovel.preco * 1) }}</p>
              </div>
              <div class="location">
                <p>
                  {{ (imovel.localizacao) }}
                </p>
              </div>
              <div class="metragem">
                <p>{{ (imovel.metragem) }} m²</p>
              </div>
              <div class="quartos">
                <p>{{ (imovel.quantidade_quarto) }} Quartos</p>
              </div>
              <div class="banheiro">
                <p>
                  {{ (imovel.quantidade_banheiro) }} Banheiros
                </p>
                <div class="suite" v-if="imovel.quantidade_suite">
                  <p class="nhs">Não há suítes</p>
                </div>
                <div class="suite" v-else>
                  <p> {{ imovel.quantidade_suite }} Suítes</p>
                </div>
              </div>
            </div>

          </ul>
        </div>
        <div class="imovel-description-stars">
          <div class="stars">
            <i class="mdi mdi-star" />
            <i class="mdi mdi-star" />
            <i class="mdi mdi-star" />
            <i class="mdi mdi-star" />
            <i class="mdi mdi-star" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nhs {
  font-weight: bold;
}

.prodn {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-bottom: 70px;
  font-weight: bolder;
  color: #ff0000;
}

.details {
  padding: 20px;
}

.badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: orange;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.botao {
  display: flex;
  align-items: center;
  background-color: #f28a31;
  color: #ffffff;
  width: 20%;
  margin-left: 16px;
  padding: 10px 140px;
  border: 2px solid #f28a31;
  transition: background-color 1s ease, color 1s ease;
  justify-content: center;
}

.principal {
  display: flex;
  flex-direction: row;
}

.form2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
}

.caixinha1 {
  padding: 0 70px;
  width: 40%;
  margin-left: 16px;
  background-color: #f2f2f2;
  height: 38px;
  line-height: 38px;
  font-family: sans-serif;
  color: white;
  font-size: 15px;
  background: #01081d80;
}

.titu {
  color: aliceblue;
  font-size: 80px;
}

.form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px;
  border-top: 7px solid #f28a31;
  background-color: #0f0f4180;
  height: 400px;
  width: 700px;
  position: absolute;
}


.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.destaques {
  margin-top: 100px;
}

.carousel__item {
  height: 760px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
  padding-top: 200px;
  padding-bottom: 200px;
  background-size: cover;
}


.icon {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 12rem;
  right: 20px;
}

.icon:hover {
  background-color: #bac9e8;
  color: #0a2668;
}

.icon i {
  font-size: 2rem;
}

.imovel-list {
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.imovel-card {
  display: flex;
  flex: 1 1 calc(33.333% - 1.5rem);
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.containerImovel {
  width: 50%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

@media screen and (max-width: 1024px) {
  .containerImovel {
    display: flex;
    flex-direction: column;
  }

  .imovel-card>div {
    align-items: center;
    display: flex !important;
    flex-direction: column !important;


  }
    .containerImovel:first-child img {
     width: 400px !important;
     height: 400px !important;
    }

    .imovel-title {
      font-size: 50pt ;
  }

  .imovel-price p {
    font-size: 12pt;
  }

}

.containerImovel:first-child img {
  width: 400px !important;
  height: 300px !important;
}

.imovel-card>div {
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  align-items: center;
}


.imovel-img-wrapper {
  position: relative;
}


.imovel-title h3 {
  font-size: 30px;
  margin-bottom: 8px;
  color: #e76d03;
  font-family: 'Quicksand', sans-serif;
}

.imovel-price {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 16px;
}



.imovel-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.imovel-description-stars p {
  font-size: 12px;
  color: #535050;
}

.banner1 {
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  min-height: 400px;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.shadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #01081d80;
  z-index: 1;
}


.botao {
  display: flex;
  align-items: center;
  background-color: #f28a31;
  color: #ffffff;
  width: 100%;
  max-width: 200px;
  margin: 16px auto;
  padding: 10px 20px;
  border: 2px solid #f28a31;
  transition: background-color 1s ease, color 1s ease;
  justify-content: center;
  border-radius: 5px;
}

.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  border-top: 7px solid #f28a31;
  background-color: #102442;
  opacity: 80%;
  width: 90%;
  max-width: 700px;
  height: auto;
  min-height: 400px;
  position: relative;
  margin: 20px auto;
  border-radius: 10px;
  z-index: 2;
}

.caixinha1 {
  padding: 0 10px;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  background-color: #01081d80;
  height: 38px;
  line-height: 38px;
  font-family: sans-serif;
  color: white;
  font-size: 15px;
  text-align: center;
}

.inner-text {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}



@media (min-width: 768px) {
  .form {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
  }

  .caixinha1 {
    width: 40%;
    margin-left: 16px;
  }

  .botao {
    width: auto;
    padding: 10px 40px;
    margin-left: 16px;
  }
}
</style>