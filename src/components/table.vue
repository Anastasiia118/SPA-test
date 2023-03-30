<template>
  <div class="flex m-2.5 overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed"
    >
      <thead class="ext-xs uppercase dark:bg-light-plum dark:text-plum">
        <th scope="col" class="px-6 py-3">id</th>
        <th scope="col" class="px-6 py-3">name</th>
        <th scope="col" class="px-6 py-3">value</th>
        <th
          scope="col"
          class="px-6 py-3 flex sm:flex-row justify-between sm:justify-start flex-col"
        >
          <button
            @click="previous10Items()"
            class="bg-blue-500 sm:mr-1 mr-0 mb-1 sm:mb-0 flex justify-center btn add-info font-medium text-white-600 hover:bg-violette"
          >
            <i class="fa-solid fa-arrow-left fa-lg"></i>
          </button>
          <button
            @click="next10Items()"
            class="bg-blue-500 flex justify-center btn add-info font-medium text-white-600 hover:bg-violette"
          >
            <i class="fa-solid fa-arrow-right fa-lg"></i>
          </button>
        </th>
      </thead>
      <tbody>
        <single-item v-for="item in currentItems" :key="item.id" :item="item" />
      </tbody>
    </table>
  </div>
  <div class="pagination">
    <i
      @click="pageClick(page)"
      class="page uppercase dark:text-plum hover:text-gray"
      v-for="page in pages"
      :key="page"
      >{{ page }}</i
    >
  </div>
</template>

<script>
const ITEMS_PER_PAGE = 10;

import SingleItem from "./SingleItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { SingleItem },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    currentItems() {
      return this.items.slice(
        this.page * ITEMS_PER_PAGE,
        (this.page + 1) * ITEMS_PER_PAGE
      );
    },
    isFirstPage() {
      return this.page == 0;
    },
    pages() {
      return Math.ceil(this.items.length / ITEMS_PER_PAGE);
    },
  },
  methods: {
    next10Items() {
      const maxPages = this.items.length / ITEMS_PER_PAGE;

      if (this.page + 1 < maxPages) {
        this.page++;
      }
    },
    previous10Items() {
      if (!this.isFirstPage) {
        this.page--;
      }
    },
    pageClick(page) {
      this.page = page - 1;
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style>
.btn {
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  padding: 3px 10px;
  border-radius: 5px;
  border: solid 1px;
  cursor: pointer;
  font-style: normal;
  margin-right: 3px;
}
</style>
