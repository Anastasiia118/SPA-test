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
      page: 0,
    };
  },
  getters: {
    totalValue(state) {
      let total = 0;
      state.items.forEach((item) => {
        total += item.value;
      });
      return total;
    },
    averageTotalValue(state, getters) {
      return getters.totalValue / state.items.length;
    },
    valueOf50AndMore(state) {
      let total = 0;
      state.items
        .filter((item) => item.value >= 50)
        .forEach((item) => {
          total += item.value;
        });
      return total;
    },
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
      // The endpoint should have the ID parameter, but we don't have this option with the JSON
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
