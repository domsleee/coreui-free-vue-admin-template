<template>
  <div class="animated fadeIn">
    <b-card>
      <TopDash />
    </b-card>
  </div>
</template>

<script>





import TopDash from './dashboard/mycode/TopDash'


export default {
  name: 'dashboard',
  components: {
    TopDash
    
  },
  onMount: function() {
    window.addEventListener("message", function(event) {
      if (event.origin != 'https://www.dailytelegraph.com.au') {
          // something from an unknown domain, let's ignore it
          return;
      }
      document.body.innerHTML = ":)";
    });
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
