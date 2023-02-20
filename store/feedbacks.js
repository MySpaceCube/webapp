import axios from 'axios';

export const state = () => ({
  list: []
});

export const getters = {
  getList (state) {
    return state.list;
  }
};

export const mutations = {
  setList (state, feedbacks) {
    state.list = feedbacks;
  }
};

export const actions = {
  async fetchList ({ state }) {
    // TODO Fixme with var url
    axios.get('https://localhost:9080/feedbacks')
      .then((response) => {
        console.log(response);

        return response.data;
      })
      .catch((error) => {
        console.error(error);

        return error;
      });
  }
};
