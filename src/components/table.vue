<template>
  <div class="flex m-2.5 overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed"
    >
      <thead
        class="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <th scope="col" class="px-6 py-3">id</th>
        <th scope="col" class="px-6 py-3">name</th>
        <th scope="col" class="px-6 py-3">value</th>
        <th scope="col" class="px-6 py-3 flex">
          <button
            @click="previous10Items()"
            class="mr-1 flex btn add-info font-medium text-white-600 hover:bg-blue-600"
          >
            <i class="fa-solid fa-arrow-left fa-lg" style="color: #f0f2f4"></i>
          </button>
          <button
            @click="next10Items()"
            class="flex btn add-info font-medium text-white-600 hover:bg-blue-600"
          >
            <i class="fa-solid fa-arrow-right fa-lg" style="color: #f0f2f4"></i>
          </button>
        </th>
      </thead>
      <tbody>
        <single-item v-for="item in currentItems" :key="item.id" :item="item" />
      </tbody>
    </table>
  </div>
</template>

<script>
const ITEMS_PER_PAGE = 10;

import SingleItem from "./SingleItem.vue";

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
    }

  
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
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style>
.btn {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-radius: 4px;
}
</style>
