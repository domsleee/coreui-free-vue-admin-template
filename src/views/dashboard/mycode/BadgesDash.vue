<template>
  <div class="badges-container">

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=100*profile_data.articles/TOP_READER_COUNT
              color="blue"
      >
        <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=70 class='rounded-img' />
      </v-progress-circular>
      <p v-b-tooltip.hover v-bind:title="top_reader_text" class="badge-name"> (TOP READER)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=sport_perc
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/cache/catalog/badges/tyrell-sigil-game-of-thrones-badge-india-700x700.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p v-b-tooltip.hover v-bind:title="sports_fan_text" class="badge-name"> (SPORT FAN)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=news_perc
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/catalog/badges/fire-and-blood-house-targaryen-game-of-thrones-badge-india.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p v-b-tooltip.hover v-bind:title="news_fan_text" class="badge-name"> (NEWS FAN)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=100*profile_data.shared/SUPER_SHARER
              color="blue"
      >
        <v-img src='https://www.redwolf.in/image/catalog/badges/khaleesi-daenerys-taragryen-game-of-thrones-badge-india.jpg' width=80 class='rounded-img' />
      </v-progress-circular>
      <p v-b-tooltip.hover v-bind:title="super_sharer_text" class="badge-name"> (SUPER SHARER)</p>
    </div>

    <div class="oneline">
      <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value=100*profile_data.shared/GOSSIP_CT
              color="blue"
      >
        <v-img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-tJrMFYWWngI0I525ZeWCOeM2hA42cSxmedi8aW5eC-U88vnNA' width=80 class='rounded-img' />
      </v-progress-circular>
      <p v-b-tooltip.hover v-bind:title="gossip_queen_text" class="badge-name"> (GOSSIP QUEEN)</p>
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
      <p v-b-tooltip.hover v-bind:title="the_loyal_text" class="badge-name"> (THE LOYAL)</p>
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
      <p class="badge-name"> (MYSTERY)</p>
    </div>
  </div>
</template>

<script>
require('./explosion.scss');
async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(()=> resolve(), ms);
  });
}

let profile_data = {
  'credits': 0,
  'articles': 0,
  'shared': 0,
  'COMMENTS': 0, // not implemented
  'dailyStreak': 5,
  'weeklyStreak': 5,
};

export default {
  data() {
    return {
      profileProgress: 0,
      profile_data: profile_data,
      SUPER_SHARER_CT: 20,
      GOSSIP_CT: 30,
      SPORTS_CT: 20,
      NEWS_CT: 15,
      TOP_READER_CT: 30,
    }
  },
  methods: {
    getData() {
      let local_profile_data = localStorage.getItem('profile_data');
      if (local_profile_data) {
        try {
          let local_obj = JSON.parse(local_profile_data);
          for (let key in local_obj) {
            profile_data[key] = local_obj[key];
          }
          this.count_up_value = profile_data.credits;
        } catch {
          // do nothing
        }
      }
    },
    getCategories: function() {
      let str = localStorage.getItem('profile_data');
      if (!str) return {};
      try {
        let obj = JSON.parse(str);
        return obj.categories ? obj.categories : {};
      } catch {
        return {};
      }
    },
    getCat: function(cat) {
      let cats = this.getCategories();
      if (cat in cats) return cats[cat];
      return 0;
    },
  },
  async mounted() {
    await sleep(500);
    this.getData();
    this.profileProgress = 50;
  },
  computed: {
    'top_reader_text': function() {
      return `Read ${this.TOP_READER_CT} articles (current: ${this.profile_data.articles})`;
    },
    'super_sharer_text': function() {
      return `Share ${this.SUPER_SHARER_CT} articles (current: ${profile_data.shared})`;
    },
    'gossip_queen_text': function() {
      return `Comment on ${this.GOSSIP_CT} posts (current: ${profile_data.COMMENTS})`;
    },
    'the_loyal_text': function() {
      return 'placeholder';
    },
    'sports_fan_text': function() {
      let ct = this.getCat('sport');
      return `Read ${this.SPORTS_CT} sports post (current: ${ct})`;
    },
    'news_fan_text': function() {
      let ct = this.getCat('news');
      return `Read ${this.NEWS_CT} news post (current: ${ct})`;
    },
    'sport_perc': function() {
      return 100*this.getCat('sport')/this.SPORTS_CT;
    },
    'news_perc': function() {
      return 100*this.getCat('news')/this.NEWS_CT;
    }
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
