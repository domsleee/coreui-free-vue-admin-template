<template>
  <div class="animated fadeIn">
    <b-card>
      <LeaderBoard />
    </b-card>
  </div>
</template>

<script>



import LeaderBoard from './dashboard/mycode/LeaderBoard'


export default {
  name: 'leaderboard',
  components: {
    LeaderBoard
  },
  onMount: function() {
  },
  data: function () {
    return {};
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
