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
              <h3>
              Dan Louw<br />
              Credits: {{profile_data.credits}}<br />
              Articles: {{profile_data.articles}}<br />
              Shared: {{profile_data.shared}}<br />
              Comments: {{profile_data.COMMENTS}}<br />
              </h3>
            </b-col>
          </b-row>
          <b-row>
            <v-flex>
              <br />
              <div fluid>
                Profile competion
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
                        :size="150"
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
                        :size="150"
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
                      :value=100*profile_data.articles/500
                      color="blue"
              >
                <!--<explosion v-if="true">-->
                <v-img src='https://png.pngtree.com/element_origin_min_pic/17/04/12/c5490bc7210a7eb88f22804682570e9b.jpg' width=110 class='rounded-img' />
              </v-progress-circular>
              
              <p v-b-tooltip.hover v-bind:title="top_reader_text" class="badge-name-dash"> (TOP READER)</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    

  </div>
</template>

<script>
async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(()=> resolve(), ms);
  });
}

const DAILY_STREAK = 6;
const WEEKLY_STREAK = 21;
let activated = false;

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
      activated: activated,
      profile_data: profile_data,
      WEEKLY_STREAK: WEEKLY_STREAK,
      DAILY_STREAK: DAILY_STREAK
    }
  },
  computed: {
    'top_reader_text': function() {
      return `Read 500 articles to achieve this badge (current: ${profile_data.articles})`
    }
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
    
    let local_profile_data = localStorage.getItem('profile_data');
    if (local_profile_data) {
      try {
        let local_obj = JSON.parse(local_profile_data);
        for (let key in local_obj) {
          profile_data[key] = local_obj[key];
        }
      } catch {
        // do nothing
      }
    }
  },
  methods: {
    updateData(data) {
      // updates progress bars,
      // updates localhost localstorage
      console.log(data);
      profile_data.credits = data.credits;
      profile_data.articles = data.articleCount;
      profile_data.shared = data.articlesShared;
      profile_data.dailyStreak = profile_data.articles;
      profile_data.weeklyStreak = profile_data.articles;
      profile_data.categories = JSON.parse(data.categories);
      localStorage.setItem('profile_data', JSON.stringify(profile_data));
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
