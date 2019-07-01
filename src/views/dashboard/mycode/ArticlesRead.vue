<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: Bar,
  methods: {
    getCategories: function() {
      let str = localStorage.getItem('profile_data');
      if (!str) return {};
      try {
        let obj = JSON.parse(str);
        return obj.categories ? obj.categories : {};
      } catch {
        return {};
      }
    }
  },
  mounted () {
    let categories = this.getCategories();
    console.log(categories);
    let values = [], labels = [];
    for (let key in categories) {
      labels.push(key);
      values.push(categories[key]);
    }

    this.renderChart(
      {
        labels: labels,
        datasets: [{
          label: 'Articles read',
          backgroundColor: '#f87979',
          data: values
        }]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
            }
          }
        }
      }
    )
  }
}
</script>

<style>
	.oneline {
		width: 100px;
		height: 100px;
		display: inline-block;
		margin-right: 30px;
	}
</style>
