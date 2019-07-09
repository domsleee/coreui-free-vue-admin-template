<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: Bar,
  methods: {
    getData: function() {
      let data = [];
      for (let i = 0; i < 12; i++) data[i] = 0;
      let str = localStorage.getItem('profile_data');
      if (!str) return {};
      try {
        let obj = JSON.parse(str);
        data[6] = obj.articles;
        return data;
      } catch {
        return {};
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Articles Read',
            backgroundColor: '#f87979',
            data: this.getData()
          }
        ]
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
