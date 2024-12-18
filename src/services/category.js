import axios from 'axios';

export default class CategoryService {
  async getCategories() {
    const response = await axios.get('http://localhost:19003/api/categorias/');
    return response.data.results;
  }

  async createCategory(category) {
    const response = await axios.post('http://localhost:19003/api/categorias/', category);
    return response.data;
  }
}
