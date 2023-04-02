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
      itemsPerPage: 10,
      currentPage: 0,
      sortBy: "id",
      sortOrder: 1,
      filterBy: null,
    };
  },
  getters: {
    PAGES(state, getters) {
      return Math.ceil(getters.FILTERED_ITEMS.length / state.itemsPerPage);
    },
    CURRENT_ITEMS(state, getters) {
      return getters.FILTERED_ITEMS.sort((item1, item2) => {
        if (item1[state.sortBy] > item2[state.sortBy]) {
          return state.sortOrder;
        }
        return -1 * state.sortOrder;
      }).slice(
        state.currentPage * state.itemsPerPage,
        (state.currentPage + 1) * state.itemsPerPage
      );
    },
    CURRENT_PAGE(state) {
      return state.currentPage;
    },
    TOTAL_VALUE(state) {
      let total = 0;
      state.items.forEach((item) => {
        total += item.value;
      });
      return total;
    },
    AVERAGE_TOTAL_VALUE(state, getters) {
      return getters.TOTAL_VALUE / state.items.length;
    },
    VALUE_50_MORE(state) {
      let total = 0;
      state.items
        .filter((item) => item.value >= 50)
        .forEach((item) => {
          total += item.value;
        });
      return total;
    },
    FILTERED_ITEMS(state) {
      if (state.filterBy === null || state.filterBy === "") {
        return state.items;
      }
      return state.items.filter((item) => {
        if (item.id.toString().includes(state.filterBy.toString())) {
          return item.id == state.filterBy;
        } else {
          return false;
        }
      });
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.items = payload;
    },
    SET_DATA_EXTENDED(state, payload) {
      state.itemsExtended = payload;
    },
    SET_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
    SET_ORDER(state, payload) {
      if (state.sortBy === payload) {
        return (state.sortOrder = -1 * state.sortOrder);
      }

      state.sortBy = payload;
      state.sortOrder = 1;
    },
    SET_FILTER(state, payload) {
      state.filterBy = payload;
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
    getCurrentPage({ commit }, page) {
      commit("SET_CURRENT_PAGE", page);
    },
  },
});
