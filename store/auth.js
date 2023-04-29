import axios from 'axios';

export const state = () => ({
  user: null,
  isLogged: false,
  isAdmin: false
});

export const getters = {
  getMaintenance (state) {
    return state.maintenance;
  },
  getApiVersion (state) {
    return state.apiVersion;
  }
};

export const mutations = {
  setMaintenance (state, maintenance) {
    state.maintenance = maintenance;
  }
};

export const actions = {
  async fetchApiInfo ({ state }) {
    // TODO Fixme with var url
    axios.get('https://localhost:9080')
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
