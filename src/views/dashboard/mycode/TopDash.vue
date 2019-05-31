<template>
  <div>
    <p>
      Name: Dan<br />
      Articles: 5<br />
      Credits: 200<br />
      Badges: 5<br />
    </p>
    <b-img src='https://fakeimg.pl/100x100/eae0d0/?retina=1' width=100 />
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value=profileProgress
      color="blue"
    >
      <v-img src='https://fakeimg.pl/100x100/eae0d0/?retina=1' width=70 class='rounded-img' />
    </v-progress-circular>
    (current badge)
  </div>
</template>

<script>
async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(()=> resolve(), ms);
  });
}

export default {
  data() {
    return {
      profileProgress: 0
    }
  },
  async mounted() {
    await sleep(500);
    this.profileProgress = 50;
  }
}
</script>

<style>
.rounded-img {
    border-radius:50px;
    border: 1px solid grey;
}
</style>
