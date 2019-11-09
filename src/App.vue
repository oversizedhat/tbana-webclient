<template>
  <div id="app">
    <HelpBar />
    <Timetable :siteName=from :siteId=home.siteId :dir=home.dir :destFilter=home.filter />
    <Timetable :siteName=to :siteId=work.siteId :dir=work.dir :destFilter=work.filter />
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue';
import HelpBar from './components/HelpBar.vue';
import model from './datamodel';

export default {
  name: 'app',
  props:{
    from: String,
    to: String
  },
  components: {
    Timetable,
    HelpBar
  },
  computed: {
    home: function () {
      return { 
        siteId:model.getSiteId(this.from), 
        dir:model.getDirection(this.from, this.to), 
        filter:model.getPossibleEndSiteFilter(this.from, this.to) 
      };
    },
    work: function () {
      return { 
        siteId:model.getSiteId(this.to), 
        dir:model.getDirection(this.to, this.from), 
        filter:model.getPossibleEndSiteFilter(this.to, this.from) 
      };
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:Light');

#app {
  font-family: 'Roboto Condensed','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin:0px;
  padding:0px;
  font-size: 1.2em;
}
h2 {
  font-size: 80%;
}
h1 {
  font-size: 110%;
}
</style>
