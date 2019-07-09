<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="6">
          <b-row>
            <b-col width='100px'>
              <b-img src='https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=11' width=120 />
            </b-col>
            <b-col style='font-size: 1.3em'>
              <h3 style='margin-bottom:0;padding-bottom:0'>
              <span style='color:grey;font-weight:700'>Dan Louw</span><br />
              </h3>
              <h4>
              Credits: 
              <span class="iCountUp" v-bind:style=count_up_style>
                <ICountUp
                  :options="count_up_options"
                  :endVal="count_up_value"
                  @ready="creditsReady"
                />
              </span><br />
              Articles: {{profile_data.articles}}<br />
              Shared: {{profile_data.shared}}<br />
              Comments: {{profile_data.COMMENTS}}<br />
              </h4>
            </b-col>
          </b-row>
          <b-row>
            <v-flex>
              <br />
              <div fluid>
                Profile completion
                <b-progress :value="70" :max="100" show-progress animated></b-progress>
                <small class="text-muted">Complete to get 100 credits.</small>
              </div>
            </v-flex>
          </b-row>
        </b-col>
        <b-col sm="3">
          <b-row>
            <b-col>
              <div>
                <v-progress-circular
                        :rotate="-90"
                        :size="110"
                        :width="8"
                        :value=100*profile_data.dailyStreak/DAILY_STREAK
                        color="green"
                >
                  Daily Reads
                  {{Math.min(DAILY_STREAK, profile_data.dailyStreak)}}/{{DAILY_STREAK}}
                </v-progress-circular>
                
              </div>
            </b-col>
            <b-col>
              <div>
                <v-progress-circular
                        :rotate="-90"
                        :size="110"
                        :width="8"
                        :value=100*profile_data.weeklyStreak/WEEKLY_STREAK
                        color="green"
                >
                  Weekly Reads
                  {{Math.min(WEEKLY_STREAK, profile_data.weeklyStreak)}}/{{WEEKLY_STREAK}}
                </v-progress-circular>
                
              </div>
            </b-col>
          </b-row>

        </b-col>
        <b-col sm="3">
          <div class="oneline" style="float: right; width: 150px;" fluid>
            <div>
              <v-progress-circular
                      :rotate="-90"
                      :size="150"
                      :width="15"
                      :value=100*profile_data.articles/TOP_READER_COUNT
                      color="blue"
              >
                <!--<explosion v-if="true">-->
                <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=110 class='rounded-img' />
              </v-progress-circular>
              
              <p v-b-tooltip.hover v-bind:title="top_reader_text" class="badge-name-dash">(TOP READER)</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    

  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2';

async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(()=> resolve(), ms);
  });
}

const easingFn = function (t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
}

const DAILY_STREAK = 6;
const WEEKLY_STREAK = 21;
let count_up_options = {
  duration: 0.001,
  useEasing: true,
  easingFn: easingFn,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: ''
};
const COUNT_UP_DURATION = 2.5;
const LOADING_STYLE = {color:'green', 'font-weight': 700};
const LOADING_DELAY = 300; // delay when new data comes in
const LOADED_STYLE = {'font-size':'1em'};
const LOADED_DELAY = 50;  // delay after animation finishes

let profile_data = {
  'credits': 0,
  'articles': 0,
  'shared': 0,
  'COMMENTS': 0, // not implemented
  'dailyStreak': 5,
  'weeklyStreak': 5,
};

export default {
  components: {
    ICountUp
  },
  data() {
    return {
      loaded_timeout: null,
      loading_timeout: null,
      profile_data: profile_data,
      WEEKLY_STREAK: WEEKLY_STREAK,
      DAILY_STREAK: DAILY_STREAK,
      count_up_options: count_up_options,
      count_up_value: 0,
      count_up_style: LOADED_STYLE,
      TOP_READER_COUNT: 30
    }
  },
  computed: {
    'top_reader_text': function() {
      return `Read ${this.TOP_READER_COUNT} articles to achieve this badge (current: ${profile_data.articles})`
    },
  },
  async mounted() {
    // source from localhost localstorage
    await sleep(500);
    
  },
  beforeMount() {
    let that = this;
    window.addEventListener("message", function(event) {
      if (event.origin != 'https://www.dailytelegraph.com.au') {
        // something from an unknown domain, let's ignore it
        return;
      }
      if (!('articlesShared' in event.data)) return;
      // disable for now 
      that.updateData(event.data);
    }, false);
    this.getData();
  },
  methods: {
    creditsReady: function(instance, countUp) {
      instance.options.duration = COUNT_UP_DURATION;
      clearTimeout(this.loaded_timeout);
      this.loaded_timeout = setTimeout(() => {
        console.log("SET LOADED STYLE");
        this.count_up_style = LOADED_STYLE;
      }, LOADED_DELAY);
    },
    updateData(data) {
      // updates progress bars,
      // updates localhost localstorage
      profile_data.credits = data.credits;
      profile_data.articles = data.articleCount;
      profile_data.shared = data.articlesShared;
      profile_data.dailyStreak = profile_data.articles;
      profile_data.weeklyStreak = profile_data.articles;
      let that = this;
      clearTimeout(this.loading_timeout);
      clearTimeout(this.loaded_timeout);
      this.loading_timeout = setTimeout(() => {
        if (profile_data.credits !== that.count_up_value) {
          console.log("SET LOADING STYLE");
          clearTimeout(that.loaded_timeout);
          that.count_up_value = profile_data.credits;
          that.count_up_style = LOADING_STYLE;
        }
      }, LOADING_DELAY);
      profile_data.categories = JSON.parse(data.categories);
      localStorage.setItem('profile_data', JSON.stringify(profile_data));
    },
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
    explode(div) {
      // todo
      div.className += ' explode';
    }
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
  .badge-name-dash {
    padding-left: 30px;
    margin-top: 10px;
    font-weight: bold;
  }
.rounded-img {
  border-radius:50px;
  border: 1px solid grey;
}
</style>
