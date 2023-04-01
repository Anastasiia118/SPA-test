<template>
  <div>
    <header-component />
    <table-component />
    <charts />
  </div>
</template>

<script>
import TableComponent from "./components/TableComponent.vue";
import Charts from "./components/Charts.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: { TableComponent, Charts, HeaderComponent },
};
</script>

<style></style>
