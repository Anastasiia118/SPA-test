<template>
  <div >
    <table-component :items="items"/>
  </div>
</template>

<script>
import TableComponent from "./components/Table.vue";
import Items from "./assets/data.json";
export default {
  components: { TableComponent },
  data() {
        return {
            items: Items
        }
    },
}
</script>

<style>

</style>