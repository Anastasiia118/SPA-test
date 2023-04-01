<template>
  <div class="p-4">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :style="myStyles"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(['TOTAL_VALUE', 'AVERAGE_TOTAL_VALUE', 'VALUE_50_MORE']),
    myStyles() {
      return {
        height: `${30}rem`,
        position: "relative",
      };
    },
    valueOfItems() {
      return this.VALUE_50_MORE;
    },
    getTotalValue() {
      return this.TOTAL_VALUE;
    },
    getAverage() {
      return this.AVERAGE_TOTAL_VALUE;
    },
    chartData() {
      return {
        labels: ["Total", "Average", "Items with value >= 50"],
        datasets: [
          { data: [this.getTotalValue, this.getAverage, this.valueOfItems] },
        ],
      };
    },
  },
};
</script>
