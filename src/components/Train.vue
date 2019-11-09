<template>
  <div v-bind:style="styleObject">
      <h2>{{ train.Destination }}</h2>
      <h1>{{ train.moment.fromNow() }}</h1>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Train',
  data: () => ({
    styleObject: { 'background-color': 'black' },
  }),
  props: {
    train: Object
  },
  methods: {
    update() {
        this.styleObject['background-color'] = this.getAttentionColor(this.train);
    },
    getAttentionColor() {
      const currentTimeDiff = moment(this.train.ExpectedDateTime).diff(moment());
      if (currentTimeDiff < 2*60*1000) {
        return "red";
      } else if (currentTimeDiff < 5*60*1000) {
        return "orange";
      }
      return "green";
    }
  },
  mounted() {
    this.styleObject['background-color'] = this.getAttentionColor(this.train);
  }
}
</script>

<style scoped>
h2 {
  margin:4px 0px 4px;
}
h1 {
  margin:4px 0px 4px;
}
div {
  display: inline-block;
  padding: 0;
  overflow: hidden;
  min-height: 100px;
  width: 48%;
  min-width: 120px;
  background-color: black;
  border-radius: 8px;
}
</style>
