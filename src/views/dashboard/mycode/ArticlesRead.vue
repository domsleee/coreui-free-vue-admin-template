<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: ['News', 'Sport', 'Entertainment', 'Opinion'],
        datasets: [
          {
            label: 'Articles Read',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: true,
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
