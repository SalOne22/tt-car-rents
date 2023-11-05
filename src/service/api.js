import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

class Api {
  constructor(limit = 12) {
    this.page = 1;
    this.limit = limit;
    this.filters = {};
  }

  setPage(page) {
    this.page = page;
  }

  setFilters(filters) {
    this.filters = filters;
  }

  async fetchAdverts() {
    const res = await axios.get('/advert', {
      params: {
        page: this.page,
        limit: this.limit,
        ...this.filters,
      },
    });

    this.page += 1;

    return res.data;
  }

  async fetchAdvertById(id) {
    const res = await axios.get(`/advert/${id}`);

    return res.data;
  }
}

export default new Api();
