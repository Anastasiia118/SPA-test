<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  components: {
    Bar,
  },
  data() {
    return {};
    chartOptions: {
      responsive: true;
    }
  },
  computed: {
    numberOfItems() {
      return this.$store.state.items.length;
    },
    chartData() {
      return {
        labels: ["Total", "February", "March"],
        datasets: [{ data: [123, 12111, this.numberOfItems] }],
      };
    },
  },
};
</script>
