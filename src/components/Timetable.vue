<template>
  <div :key="renderTick">
 
    <h2>{{ siteName }} </h2>
    <div v-if="!hasValidTrainData()">
      <p>Söker efter tunnelbanor för resa mot {{ destSiteName }}...</p>
      <div class="lds-dual-ring"></div>
    </div>
    <Train :train=item v-for="item in trainTable" v-bind:key="item.ExpectedDateTime" />
  </div>
</template>

<script>
import moment from 'moment';
import config from '../config.js';
import Train from './Train.vue';

moment.locale('sv');

export default {
  name: 'Timetable',
  data: () => ({
    trainTable: [],
    renderTick:0,
    updateInterval:-1,
    timeout:0
  }),
  components: {
    Train
  },
  props: {
    siteName: String,
    destSiteName: String,
    siteId: String,
    dir: String,
    destFilter: Array
  },
  methods: {
    hasValidTrainData() {
      return this.trainTable && this.trainTable.length > 0;
    },
    dataLoaded() {
      this.clearAllIntervals();
      try {
        this.trainTable = JSON.parse(this.request.responseText);
     
        if (this.destFilter && this.destFilter.length > 0) {
          const filteredTable = this.trainTable.filter(train => this.destFilter.includes(train.Destination));
          if (filteredTable.length > 0){
            this.trainTable = filteredTable;
          }
        }
        this.trainTable = this.trainTable.slice(0,4);
        this.trainTable.forEach((train) => {
          train.moment = moment(train.ExpectedDateTime);
        })
        
        this.update();
        this.updateInterval = setInterval(() => {  this.update() }, config.updateIntervalMs);
      } catch (e) {
        // eslint-disable-next-line
        console.info("Failed to load new data, trying again in 1 sec.");
        this.timeout = setTimeout(() => {  this.refreshData() }, 1000);
      }
    },
    update() {
      if (this.hasValidTrainData()) {
        this.renderTick++;
        let currentTimeDiff = moment(this.trainTable[0].ExpectedDateTime).diff(moment());
        const trainIsLeaving = currentTimeDiff < -10000;

        //limit data refresh to each 10 sec during train departure
        if (trainIsLeaving && this.renderTick%10 === 0) {
          this.refreshData();
        }
      }
    },
    refreshData() {
      this.request = new XMLHttpRequest();
      this.request.open('GET', config.mode == "dev"?`mockres${this.siteId}.json`:`${config.apiEndPoint}?siteId=${this.siteId}&dir=${this.dir}`, true);
      this.request.onload = this.dataLoaded;
      this.request.send();
    },
     clearAllIntervals() {
      clearInterval(this.updateInterval);
      clearTimeout(this.timeout);
    }
  },
  mounted() {
    this.refreshData();
  },
  destroyed() {
    this.clearAllIntervals();
  }
}
</script>

<style scoped>
div {
  padding: 0px;
  color: white;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 3px;
  margin-right: 3px;
  vertical-align: top;
}
h2 {
  margin:8px 0px 4px;
}

/*Loader spinner taken from loading.io/css - CC0 License*/
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #666666;
  border-color: #666666 transparent #666666 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
