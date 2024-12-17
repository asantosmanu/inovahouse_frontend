import axios from 'axios';

export default class ImoveisService {
  async getImoveis() {
    const response = await axios.get('/imoveis/');
    return response.data.results;
  }

  async getImoveisByCategory(category_id) {
    const response = await axios.get(`/imoveis/${category_id}`);
    return response.data.results;
  }

  async createImovel(imovel) {
    const response = await axios.post('/imoveis/', imovel);
    return response.data;
  }
}
