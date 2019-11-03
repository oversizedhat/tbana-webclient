<template>
  <div id="app">
    <HelpBar />
    <Timetable :siteId=home.siteId :dir=home.dir :destFilter=home.filter />
    <Timetable :siteId=work.siteId :dir=work.dir :destFilter=work.filter />
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:black;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
