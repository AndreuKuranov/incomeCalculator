import axios from 'axios';

export default class PostService {
  static async getAll() {
    const response = await axios.get('http://localhost:3000/inquiry');
    return response.data;
  }

  static async getItem(idSave) {
    const response = await axios.get(`http://localhost:3000/inquiry/${idSave}`);
    return response.data;
  }

  static async deleteItem(idSave) {
    await axios.delete(`http://localhost:3000/inquiry/${idSave}`);
  }
}
