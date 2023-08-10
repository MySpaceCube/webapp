import axios from 'axios';
import { defineStore } from 'pinia';
const { $api } = useNuxtApp();

export const feedbackStore = defineStore({
  id: 'Feedback',
  state: () => {
    return {
      feedbacks: [],
      pagination: {}
    };
  },
  actions: {
    async getFeedbacks (page) {
      const request = (await axios.get(`${$api}/feedbacks`, {
        params: {
          page
        }
      })).data;
      this.feedbacks = request.data;
      this.pagination = request.pager;
    }
  }
});
