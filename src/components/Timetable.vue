<template>
  <div :key="renderTick">
    <div>{{ statusMessage }}</div>
   
    <ul id="trains">
      <li v-for="item in trainTable" v-bind:key="item.TimeTableDateTime">
        {{ item.moment.fromNow() }}
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

const SERVICE_END_POINT = 'https://zx17defqsk.execute-api.eu-north-1.amazonaws.com/production';

moment.locale('sv');

export default {
  name: 'Timetable',
  data: () => ({
    statusMessage: "Laddar..",
    trainTable: [],
    renderTick:0,
    updateInterval:-1
  }),
  props: {},
  methods: {
    dataLoaded() {
      //console.log(this.request.responseText);
      this.statusMessage = "Bagarmossen mot stan:";
      this.trainTable = JSON.parse(this.request.responseText).slice(0,3);
      this.trainTable.forEach((train) => {
        train.moment = moment(train.TimeTabledDateTime)
      })
    },
    update() {
      this.renderTick++;
      const trainIsLeaving = moment(this.trainTable[0].TimeTabledDateTime).diff(moment()) < -10000;
      //limit data refresh to each 10 sec during train depature
      if (trainIsLeaving && this.renderTick%10 === 0) {
        this.refreshData();
      }
    },
    refreshData() {
      this.request = new XMLHttpRequest();
      this.request.open('GET', SERVICE_END_POINT, true);
      this.request.onload = this.dataLoaded;
      this.request.send(null);
    }
  },
  mounted() {
    this.refreshData();
    this.updateInterval = setInterval(() => {  this.update() }, 1000);
  },
  destroyed() {
    clearInterval(this.updateInterval);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
