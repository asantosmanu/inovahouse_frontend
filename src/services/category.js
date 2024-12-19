import axios from 'axios';

export default class CategoryService {
  async getCategories() {
    const response = await axios.get('http://0.0.0.0:19003/api/categorias/');
    return response.data.results;
  }

  async createCategory(category) {
    const response = await axios.post('http://0.0.0.0:19003/api/categorias/', category);
    return response.data;
  }
}
