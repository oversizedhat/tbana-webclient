<template>
  <div :key="renderTick" v-bind:style="styleObject">
    <h2>{{ statusMessage }} </h2>
   
    <ul id="trains">
      <li v-for="item in trainTable" v-bind:key="item.TimeTableDateTime">
        {{ item.moment.fromNow() }}
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import config from '../config.js';

moment.locale('sv');

export default {
  name: 'Timetable',
  data: () => ({
    statusMessage: "Laddar..",
    trainTable: [],
    renderTick:0,
    updateInterval:-1,
    styleObject: { 'background-color': 'black' },
  }),
  props: {
    siteId: String,
    dir: String,
    destFilter: String
  },
  methods: {
    dataLoaded() {
      this.trainTable = JSON.parse(this.request.responseText);
      if (this.destFilter && this.destFilter != "") {
        this.trainTable = this.trainTable.filter(train => train.Destination == this.destFilter);
      }
      this.trainTable = this.trainTable.slice(0,3);

      this.statusMessage = this.trainTable[0].StopAreaName + " mot "+this.trainTable[0].Destination;
      this.trainTable.forEach((train) => {
        train.moment = moment(train.TimeTabledDateTime);
      })
      
      this.update();

      clearInterval(this.updateInterval);
      this.updateInterval = setInterval(() => {  this.update() }, 1000);
    },
    update() {
      this.renderTick++;
      let currentTimeDiff = moment(this.trainTable[0].TimeTabledDateTime).diff(moment());
     
      let textColor;
      if (currentTimeDiff < 2*60*1000) {
        textColor = "red";
      } else if (currentTimeDiff < 5*60*1000) {
        textColor = "orange";
      } else {
        textColor = "green";
      }
      this.styleObject['background-color'] = textColor;

      const trainIsLeaving = currentTimeDiff < -10000;
      //limit data refresh to each 10 sec during train depature
      if (trainIsLeaving && this.renderTick%10 === 0) {
        this.refreshData();
      }
    },
    refreshData() {
      this.request = new XMLHttpRequest();
      this.request.open('GET', config.mode == "dev"?`mockres${this.siteId}.json`:`${config.apiEndPoint}?siteId=${this.siteId}&dir=${this.dir}`, true);
      this.request.onload = this.dataLoaded;
      this.request.send();
    }
  },
  mounted() {
    this.refreshData();
  },
  destroyed() {
    clearInterval(this.updateInterval);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding: 20px;
  color: white;
  margin-bottom: 5px;
}
p {
  font-size: 1.2em;
}
h2 {
  font-size: 1.1em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 1.3em;
}
</style>
