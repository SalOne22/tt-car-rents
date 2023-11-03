import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

class Api {
  constructor(limit = 12) {
    this.page = 1;
    this.limit = limit;
  }

  setPage(page) {
    this.page = page;
  }

  async fetchAdverts() {
    const res = await axios.get('/advert', {
      params: {
        page: this.page,
        limit: this.limit,
      },
    });

    this.page += 1;

    return res.data;
  }
}

export default new Api();
