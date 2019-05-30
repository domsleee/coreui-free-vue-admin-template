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
      Profile {{ profileProgress }}
    </v-progress-circular>
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
