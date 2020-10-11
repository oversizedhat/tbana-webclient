<template>
  <div :key="renderTick">
    <h2>{{ siteName }} </h2>
    <div v-if="isLoading()">
      <p>Söker efter tunnelbanor för resa mot {{ destSiteName }}...</p>
      <div class="lds-dual-ring" />
    </div>
    <div v-if="!isLoading() && !hasTrainsInTable()">
      <p>Hittar inga tunnelbanor för resa mot {{ destSiteName }}... Provar igen om {{ (10 - renderTick) }}</p>
    </div>
    <Train
      v-for="item in trainTable"
      :key="item.ExpectedDateTime"
      :train="item"
    />
  </div>
</template>

<script>
import moment from 'moment';
import config from '../config.js';
import Train from './Train.vue';

moment.locale('sv');

export default {
  name: 'Timetable',
  components: {
    Train
  },
  props: {
    siteName: {
      type: String,
      required: true
    },
    destSiteName: {
      type: String,
      required: true
    },
    siteId: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      required: true
    },
    destFilter: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  data: () => ({
    trainTable: null,
    renderTick:0,
    updateInterval:-1,
    timeout:0
  }),
  mounted() {
    this.refreshData();
  },
  destroyed() {
    this.clearAllIntervals();
  },
  methods: {
    isLoading() {
      return this.trainTable == null;
    },
    hasValidTrainData() {
      return Array.isArray(this.trainTable);
    },
    hasTrainsInTable() {
      return Array.isArray(this.trainTable) && this.trainTable.length > 1;
    },
    dataLoaded() {
      this.clearAllIntervals();
      try {
        this.trainTable = JSON.parse(this.request.responseText);

        if (this.trainTable.length > 0) {
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
        }
        
        this.update();
        this.renderTick = 0;
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

        //limit data refresh to each 10 sec during train departure, or if no trains found
        if (this.renderTick%10 === 0) {
          if (this.trainTable.length > 0) {
            let currentTimeDiff = moment(this.trainTable[0].ExpectedDateTime).diff(moment());
            const trainIsLeaving = currentTimeDiff < -10000;
            if (trainIsLeaving) {
              this.refreshData();
            }
          } else {
            this.refreshData();
          }
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
