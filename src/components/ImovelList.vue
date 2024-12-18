<script setup>
import { onMounted, ref } from 'vue';
import { useImoveisStore } from '@/stores/imovel';

import { formatPrice } from '@/helpers/format';

const imoveisStore = useImoveisStore();
const imoveis = ref([])

onMounted(async () => {
  console.log(imoveisStore.imoveis);
  await imoveisStore.getImoveis()
  imoveis.value = imoveisStore.imoveis.filter((imovel) => {
  return (
    imovel.metragem <= imoveisStore.filtros.metragem &&
    imovel.quantidade_banheiro <= imoveisStore.filtros.banheiros &&
    imovel.quantidade_quarto <= imoveisStore.filtros.quartos &&
    imovel.quantidade_suite <= imoveisStore.filtros.suite
  );
});

 //imoveis.value = imoveisStore.imoveis.filter((imovel) => imovel.metragem <= imoveisStore.filtros.metragem && imovel.quantidade_banheiro <= imoveisStore.filtros.banheiros && imovel.quantidade_quarto <= imoveisStore.filtros.quartos && imovel.quantidade_suite <= imoveisStore.filtros.suite)
});

</script>

<template>

  <div class="imovel-list">

    <router-link :to="{ name: 'ImovelAdd' }">
      <button class="icon ">
        <i class="mdi mdi-plus" />
      </button>
    </router-link>
    <div v-if="imoveisStore.imoveis.length === 0">
      <p class="prodn">IMÓVEIS NÃO ENCONTRADOS!! </p>
    </div>
    <div v-for="imovel in imoveis" :key="imovel.id" class="imovel-card">
      <div class="imovel-img-wrapper">
        <img :src="imovel.foto?.url" alt="imovel.name" />
        <i class="mdi mdi-heart-outline" />
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
              <div class="suite" v-if="(imovel.quantidade_suite) === 0">
                <p class="nhs">Não há suítes</p>
              </div>
              <div class="suite" v-else>
                <p> {{ imovel.quantidade_suite }} suítes</p>
              </div>
            </div>
          </div>

        </ul>
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
.nhs{ 
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

.imovel-img-wrapper {
  width: 400px;
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
</style>
