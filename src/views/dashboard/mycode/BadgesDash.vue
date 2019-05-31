<template>
  <div class="badges-container">

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=20
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (TOP READER)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=80
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/cache/catalog/badges/tyrell-sigil-game-of-thrones-badge-india-700x700.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (SPORT FAN)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=60
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/catalog/badges/fire-and-blood-house-targaryen-game-of-thrones-badge-india.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (NEWS FAN)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=100
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/catalog/badges/khaleesi-daenerys-taragryen-game-of-thrones-badge-india.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (SUPER SHARER)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=50
              color="blue"
      >
        <v-img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-tJrMFYWWngI0I525ZeWCOeM2hA42cSxmedi8aW5eC-U88vnNA' width=80 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (GOSSIP QUEEN)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=40
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/catalog/badges/crown-game-of-thrones-badge-india.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (THE LOYAL)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=90
              color="blue"
      >
        <v-img src='https://cdn0.iconfinder.com/data/icons/smart-technology-rounded-volume-1-1/1000/gameplay_sharing-512.png' width=70 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> (SQUARE EYES)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=78
              color="blue"
      >
        <v-img src='https://current-students.blogs.latrobe.edu.au/wp-content/uploads/sites/9/2017/02/mission-impossible-library.jpg' width=60 class='rounded-img' />
      </v-progress-circular>
      <p class="badge-name"> ( MYSTERY )</p>
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
  .badge-name {
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 10px;
  }
  .oneline {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-right: 90px;
    margin-bottom: 50px;
  }
.rounded-img {
    border-radius:50px;
    border: 1px solid grey;
}
</style>
