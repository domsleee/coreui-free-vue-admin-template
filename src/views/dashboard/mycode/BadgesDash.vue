<template>
  <div class="badges-container">

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/cache/catalog/badges/tyrell-sigil-game-of-thrones-badge-india-700x700.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=profileProgress
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
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
