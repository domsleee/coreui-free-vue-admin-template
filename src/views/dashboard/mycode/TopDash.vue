<template>
  <div>

    <div class="oneline">
      <div class="oneline 1">
        <div class="oneline 2">
          <b-img src='https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=11' width=100 />
        </div>
        <div class="oneline 3">
          <p>
            Name: Dan<br />
            Articles: 5<br />
            Credits: 200<br />
            Badges: 5<br />
          </p>
        </div>
      </div>
      <div style="width: 300px">
        <div>
          <div>
            <b-progress :value="30" :max="100" show-progress animated></b-progress>
            <small class="text-muted">Complete to get 100 credits.</small>
          </div>
        </div>
      </div>
    </div>

    <div class="oneline" style="float: right; width: 150px;">
      <v-progress-circular
              :rotate="-90"
              :size="150"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=110 class='rounded-img' />
      </v-progress-circular>
      (current badge)
    </div>




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
  .oneline {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-right: 30px;
  }
.rounded-img {
    border-radius:50px;
    border: 1px solid grey;
}
</style>
