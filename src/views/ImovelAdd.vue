<script setup>
import { onMounted, reactive, ref } from 'vue';

import ModalAddCategory from '@/components/ModalAddCategory.vue';
import { useCategoryStore } from '@/stores/category';
import { useImoveisStore } from '@/stores/imovel';
import { useUploaderStore } from '@/stores/uploader';

const categoryStore = useCategoryStore();
const imoveisStore = useImoveisStore();
const uploaderStore = useUploaderStore();

const showModal = ref(false);

const file = ref(null);
const previewImage = ref('');

const imovel = reactive({
  nome: '',
  description: '',
  categoria: '', 
  codigo: 1,
  preco: '',
  metragem: '',
  foto_attachment_key: null,
});

const uploadImage = (e) => {
  file.value = e.target.files[0];
  previewImage.value = URL.createObjectURL(e.target.files[0]);
};

async function save() {
  try {
    imovel.foto_attachment_key = await uploaderStore.uploadImage(file.value);
    console.log('Socorro 3' + imovel.foto_attachment_key)
    await imoveisStore.createImovel(imovel);
    Object.assign(imovel, {
      nome: '',
      description: '',
      categoria: '',
      preco: '',
      metragem: '',
    });
  } catch (error) {
    console.log(error);
    
  }
}

onMounted(async () => {
  await imoveisStore.getImoveis();
  await categoryStore.getCategories()  
});
</script>

<template>
  <form class="form" @submit.prevent="save">
    <div class="row-form">
      <label for="nome">Nome</label>
      <input type="text" id="nome" v-model="imovel.nome" />
    </div>
    <div class="row-form">
      <label for="description">Descrição</label>
      <textarea id="description" v-model="imovel.description"></textarea>
    </div>
    <div class="row-form">
      <label for="category">Categoria</label>
      <div class="row ">
        <select id="category" v-model="imovel.categoria">
          <option value="" disabled>Selecione uma categoria</option>
          <option
            v-for="category in categoryStore.categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.nome }}
          </option>
        </select>
        <button class="btn-icon" @click="showModal = !showModal">+</button>
      </div>
    </div>
    <div class="row-form">
      <label for="image">Foto</label>
      <div class="row">
        <input type="file" id="image" @change="uploadImage" />
        <img
          v-if="previewImage"
          :src="previewImage"
          class="previewImage"
          alt="preview"
        />
      </div>
    </div>
    <div class="row-form">
      <label for="preco">Preço</label>
      <input type="number" id="preco" v-model="imovel.preco" />
    </div>
    <div class="row-form">
      <label for="metragem">Metragem</label>
      <input type="number" id="metragem" v-model="imovel.metragem" />
    </div>
    <button class="btn-send" type="submit">Adicionar</button>
  </form>
  

  <modal-add-category v-if="showModal" @close="showModal = !showModal" />
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  color: #0a2668;
  padding: 12px;
  font-weight: bold;
  padding: 16px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.row-form {
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  max-width: 400px;
}

.form button.btn-send {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  width: 200px;
}

.form button.btn-icon {
  background-color: #0a2668;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
}

.previewImage {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #0a2668;
  padding: 0.1rem;
}
</style>