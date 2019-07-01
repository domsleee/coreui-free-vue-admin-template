<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
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
    let colors = [
      '#41B883',
      '#E46651',
      '#00D8FF',
      '#DD1B16',
      '#ffee00',
      '#0000ff',
      '#ab05fa',
      '#ffaaee'
    ];

    let values = [], labels = [], mycolors = [], i = 0;
    for (let key in categories) {
      labels.push(key);
      values.push(categories[key]);
      mycolors.push(colors[i++]);
      if (i == colors.length) i = 0;
    }

    this.renderChart({
      labels: labels,
      datasets: [
        {
          backgroundColor: mycolors,
          data: values
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})
  }
}
</script>
