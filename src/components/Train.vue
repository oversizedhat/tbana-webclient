<template>
  <div :style="styleObject">
    <h2>{{ train.Destination }}</h2>
    <h1>{{ fromNowText() }}</h1>
    <h2>{{ train.moment.format('LT') }}</h2>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Train',
  props: {
    train: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    styleObject: { 'background-color': 'black' },
  }),
  mounted() {
    this.styleObject['background-color'] = this.getAttentionColor(this.train);
  },
  methods: {
    fromNowText() {
      const fromNowText = this.train.moment.fromNow();
      if (fromNowText == "om några sekunder" 
        || fromNowText == "för några sekunder sedan" 
        || fromNowText == "för en minut sedan") {
        return "Nu!"
      }
      return fromNowText;
    },
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
  min-height: 100px;
  width: 48%;
  min-width: 120px;
  background-color: black;
  border-radius: 8px;
}
</style>
