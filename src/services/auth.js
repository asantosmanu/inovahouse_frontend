import axios from 'axios';

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('http://0.0.0.0:19003/api/usuarios/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
