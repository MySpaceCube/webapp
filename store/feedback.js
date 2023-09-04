import axios from 'axios';
import { defineStore } from 'pinia';

export const feedbackStore = defineStore({
  id: 'Feedback',
  state: () => {
    return {
      feedbacks: [],
      pagination: {},
      api: process.env.NUXT_PUBLIC_API_URL
    };
  },
  actions: {
    async getFeedbacks (page) {
      const request = (await axios.get(`${this.api}/feedbacks`, {
        params: {
          page
        }
      })).data;
      this.feedbacks = request.data;
      this.pagination = request.pager;
    }
  }
});
