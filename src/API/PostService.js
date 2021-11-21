import axios from 'axios';
import { currentDate } from '../date/date';

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

  static async putItem(idSave, saveIncomes, saveExpenses) {
    await axios.put(`http://localhost:3000/inquiry/${idSave}`, { incomes: saveIncomes, expenses: saveExpenses, name: currentDate() });
  }

  static async postItem(saveIncomes, saveExpenses, Id) {
    await axios.post('http://localhost:3000/inquiry', {
      incomes: saveIncomes, expenses: saveExpenses, name: currentDate(), id: Id,
    });
  }
}
