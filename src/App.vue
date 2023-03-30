<template>
  <div>
    <header class="flex items-center px-4 py-4 bg-white text-violette mb-4">
      <img
        src="https://uploads-ssl.webflow.com/625588512e942a74d372f853/625817f9ed08e518009109f9_Default.png"
        width="119"
        height="28"
        alt="Daily Dev Tips Logo"
      />
      <div class="mx-auto mr-2 flex flex-col text-right">
        <h1 class="font-Roboto font-bold text-xl">SPA technical test</h1>
        <a
          href="https://www.linkedin.com/in/anastasiia-gorshantova/"
          target="_blank"
          class="text-xs text-dark-plum align-top hover:underline"
          >Anastasiia Gorshantova</a
        >
      </div>
    </header>
    <table-component />
    <charts />
  </div>
</template>

<script>
import TableComponent from "./components/Table.vue";
import Charts from "./components/Charts.vue";

export default {
  components: { TableComponent, Charts },
};
</script>

<style></style>
