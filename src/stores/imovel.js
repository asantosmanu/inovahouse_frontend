import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

import ImoveisService from '@/services/imovel';
const imoveisService = new ImoveisService();

export const useImoveisStore = defineStore('imoveis', () => {
  const imoveis = ref([]);
  const currentImovel = ref(null)
  const filtros = reactive({
    quartos: 0,
    banheiros: 0,
    suite: 0,
    metragem: 0,
    categoria: 0
  })

  async function getImoveis() {
    imoveis.value = await imoveisService.getImoveis();
    console.log(imoveis.value)
  }

  async function getImovelByCategory(category_id) {
    imoveis.value = await imoveisService.getImoveisByCategory(category_id);
  }

  async function createImovel(imovel) {
    await imoveisService.createImovel(imovel);
    getImoveis();
  }

  return { imoveis, getImoveis, getImovelByCategory, createImovel, currentImovel, filtros };
});
