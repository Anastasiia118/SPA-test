<template>
  <div class="flex">
    <form class="m-2.5" @submit.prevent>
      <input
        type="text"
        placeholder="search: id"
        v-model="filterBy"
        class="shadow-md sm:rounded-lg px-2 py-1 text-gray outline-plum"
      />
    </form>
    <button @click="clearInput()" class="text-white font-semibold text-base">
      clear
    </button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapMutations(["SET_FILTER"]),
    filterBy: {
      get() {
        return this.$store.state.filterBy;
      },
      set(value) {
        this.$store.commit("SET_FILTER", value);
      },
    },
  },
  methods: {
    updateFilter() {
      if (this.filterId === "") {
        this.filterId = null;
      }
    },
    clearInput() {
      this.filterBy = "";
    },
  },
};
</script>
