import axios from 'axios';
import { defineStore } from 'pinia';

export const categoryStore = defineStore({
  id: 'Category',
  state: () => {
    return {
      categories: [],
      categoriesListing: [],
      pagination: {},
      apiUrl: process.env.NUXT_PUBLIC_API_URL
    };
  },
  actions: {
    async getCategories () {
      await axios.get(`${this.apiUrl}/categories`).then((response) => {
        this.categories = response.data.data;
        this.categoriesListing = response.data.data.map((category) => {
          return {
            code: category.id,
            name: category.name
          };
        });
      });
    }
  }
});
