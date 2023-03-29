import { createApp } from "vue";
import { createStore } from "vuex";

// const API_URL = "/api/data"

const API_URL =
  "https://raw.githubusercontent.com/Anastasiia118/SPA-test/main/src/assets/data.json";

const API_URL_EXTENDED =
  "https://raw.githubusercontent.com/Anastasiia118/SPA-test/main/src/assets/data_extended.json";

export const store = createStore({
  state() {
    return {
      items: [],
      itemsExtended: [],
    };
  },
  mutations: {
    SET_DATA(state, payload) {
      state.items = payload;
    },
    SET_DATA_EXTENDED(state, payload) {
      state.itemsExtended = payload;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        commit("SET_DATA", data);
      } catch (e) {
        console.log(e);
        alert("Something went wrong");
      }
    },
    async getItem({ commit }, id) {
      // The endpoint shold have the ID parameter, but we don't have the option with the JSON
      try {
        const response = await fetch(API_URL_EXTENDED);
        const data = await response.json();
        commit("SET_DATA_EXTENDED", data);

        return data.find((elem) => elem.id === id);
      } catch (e) {
        console.log(e);
        alert("Something went wrong");
      }
    },
  },
});
