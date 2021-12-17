import axios from 'axios';
import { currentDate } from '../date/date';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get('http://localhost:4000/inquiry', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getItem(id) {
    const response = await axios.get(`http://localhost:4000/inquiry/${id}`);
    return response.data;
  }

  static async deleteItem(id) {
    await axios.delete(`http://localhost:4000/inquiry/${id}`);
  }

  static async putItem(id, saveIncomes, saveExpenses, per) {
    await axios.put(`http://localhost:4000/inquiry/${id}`, {
      incomes: saveIncomes, expenses: saveExpenses, name: currentDate(), percent: per,
    });
  }

  static async postItem(saveIncomes, saveExpenses, Id, per) {
    await axios.post('http://localhost:4000/inquiry', {
      incomes: saveIncomes, expenses: saveExpenses, name: currentDate(), id: Id, percent: per,
    });
  }
}
