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
            class="bg-blue-500 rounded text-base py-3 px-4 text-white sm:mr-1 mr-0 mb-1 sm:mb-0 flex justify-center add-info font-medium hover:bg-violette"
          >
            <i class="fa-solid fa-arrow-left fa-lg"></i>
          </button>
          <button
            @click="next10Items()"
            class="bg-blue-500 rounded text-base py-3 px-4 text-white flex justify-center add-info font-medium hover:bg-violette"
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
  <div class="flex flex-wrap justify-center">
    <i
      @click="pageClick(page)"
      class="page uppercase dark:text-plum hover:text-gray py-[3px] px-[10px] rounded cursor-pointer border border-solid not-italic mr-[3px]"
      v-for="page in pages"
      :key="page"
      >{{ page }}</i
    >
  </div>
</template>

<script>
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
    ...mapGetters(["PAGES", "CURRENT_ITEMS", "CURRENT_PAGE"]),
    items() {
      return this.$store.state.items;
    },
    currentItems() {
      return this.CURRENT_ITEMS;
    },
    isFirstPage() {
      return this.CURRENT_PAGE == 0;
    },
    pages() {
      return this.PAGES;
    },
  },
  methods: {
    next10Items() {
      if (this.CURRENT_PAGE + 1 < this.PAGES) {
        this.$store.dispatch("getCurrentPage", this.CURRENT_PAGE + 1);
      }
    },
    previous10Items() {
      if (!this.isFirstPage) {
        this.$store.dispatch("getCurrentPage", this.CURRENT_PAGE - 1);
      }
    },
    pageClick(page) {
      this.$store.dispatch("getCurrentPage", page - 1);
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>
