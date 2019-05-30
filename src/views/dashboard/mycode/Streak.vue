<template>
  <div>
    <div class="h4 m-0">25</div>
    <div>Article reading streak</div>
    <b-progress height={} class="progress-xs my-3" variant="success" :value="98.2"/>
    <small class="text-muted">Best Streak: 58. Top 1.8% of readers.</small>
  </div>
</template>

<script>
export default {
  count: 50,
  counter: 50,
  data() {
    return {
      counter: 50
    }
  }
}
</script>
