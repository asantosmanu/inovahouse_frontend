import axios from 'axios';

export default class ImoveisService {
  async getImoveis() {
    const { data } = await axios.get('http://localhost:19003/api/imoveis/');
    return data.results;
  }

  async getImoveisByCategory(category_id) {
    const response = await axios.get(`http://localhost:19003/api/imoveis/${category_id}`);
    return response.data.results;
  }

  async createImovel(imovel) {
    const response = await axios.post('http://localhost:19003/api/imoveis/', imovel);
    return response.data;
  }
}
