<template>
  <div >
    <table-component  />
    <charts />
  </div>
</template>

<script>
import TableComponent from "./components/Table.vue";
import Charts from "./components/Charts.vue"

export default {
  components: { TableComponent, Charts },
}
</script>

<style>

</style>