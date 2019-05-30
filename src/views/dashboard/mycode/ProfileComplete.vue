<template>
    <div>
      <div>
        <b-progress :value="counter" :max="max" show-progress animated></b-progress>
        <small class="text-muted">Complete to get 100 credits.</small>
      </div>
    </div>
</template>

<script>

function ok() {
  console.log("OK");
}

async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(()=> resolve(), ms);
  });
}

export default {
  data() {
    return {
      counter: 0,
      max: 100
    }
  },
  async mounted() {
    await sleep(500);
    this.counter = 50;
  }
}
</script>
