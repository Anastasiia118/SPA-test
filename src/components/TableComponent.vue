<template>
  <div class="flex m-2.5 overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed"
    >
      <thead class="ext-xs uppercase dark:bg-light-plum dark:text-plum">
        <tr>
          <TableTh name="id" />
          <TableTh name="name" />
          <TableTh name="value" />
          
          <th
            scope="col"
            class="px-6 py-3 flex sm:flex-row justify-between sm:justify-start flex-col"
          >
            <button
              :disabled="isFirstPage"
              @click="previous10Items()"
              class="disabled:opacity-50 bg-blue-500 rounded text-base py-3 px-4 text-white sm:mr-1 mr-0 mb-1 sm:mb-0 flex justify-center add-info font-medium"
            >
              <i class="fa-solid fa-arrow-left fa-lg"></i>
            </button>
            <button
              :disabled="isLastPage"
              @click="next10Items()"
              class="disabled:opacity-50 bg-blue-500 rounded text-base py-3 px-4 text-white flex justify-center add-info font-medium"
            >
              <i class="fa-solid fa-arrow-right fa-lg"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <single-item
          v-for="item in CURRENT_ITEMS"
          :key="item.id"
          :item="item"
        />
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
import TableTh from "./TableTh.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { SingleItem, TableTh },
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
    isFirstPage() {
      return this.CURRENT_PAGE == 0;
    },
    isLastPage() {
      return this.CURRENT_PAGE == this.PAGES - 1;
    },
    pages() {
      return this.PAGES;
    },
  },
  methods: {
    ...mapActions(['getCurrentPage']),
    
    next10Items() {
      this.getCurrentPage(this.CURRENT_PAGE + 1);
    },
    previous10Items() {
      this.$store.dispatch("getCurrentPage", this.CURRENT_PAGE - 1);
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
