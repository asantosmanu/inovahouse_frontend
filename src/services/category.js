import axios from 'axios';

export default class CategoryService {
  async getCategories() {
    const response = await axios.get('/categorias/');
    return response.data.results;
  }

  async createCategory(category) {
    const response = await axios.post('/categorias/', category);
    return response.data;
  }
}
