<template>
  <tr
    class="border-b border-lavender dark:bg-light-plum dark:hover:bg-lavender"
  >
    <td
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
    >
      {{ item.id }}
    </td>
    <td class="px-6 py-4">{{ item.name }}</td>
    <td class="px-6 py-4">{{ item.value }}</td>
    <td class="px-6 py-4 w-2">
      <button
        @click="showAdditional"
        class="add-info font-medium dark:text-plum hover:underline"
      >
        more
      </button>
    </td>
  </tr>
  <tr v-if="additional" class="dark:bg-gray-700">
    <td
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ moreInfo.id }}
    </td>
    <td class="px-6 py-4">{{ moreInfo.description }}</td>
    <td class="px-6 py-4">{{ moreInfo.date }}</td>
    <td></td>
  </tr>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      additional: false,
      moreInfo: null,
    };
  },
  computed: {},
  methods: {
    async showAdditional() {
      // Check the API only when showing
      if (!this.additional) {
        this.moreInfo = await this.$store.dispatch("getItem", this.item.id);
      }

      this.additional = !this.additional;
    },
  },
};
</script>
