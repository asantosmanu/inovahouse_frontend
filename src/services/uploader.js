import axios from 'axios';

export default class UploaderService {
  async uploadImage(image) {
    const formData = new FormData();
    formData.append('file', image);
    const response = await axios.post('http://0.0.0.0:19003/api/media/images/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Socorro" + response.data)
    return response.data;
  }
}
