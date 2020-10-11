<template>
  <div id="app">
    <HelpBar />
    <Timetable
      :site-name="from"
      :dest-site-name="to"
      :site-id="home.siteId"
      :dir="home.dir"
      :dest-filter="home.filter"
    />
    <Timetable
      :site-name="to"
      :dest-site-name="from"
      :site-id="work.siteId"
      :dir="work.dir"
      :dest-filter="work.filter"
    />
    <router-link to="/select">
      BYT STATIONER
    </router-link>
    <div id="version">
      {{ appVersion }}
    </div>
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue';
import HelpBar from './components/HelpBar.vue';
import model from './datamodel.js';

export default {
  name: 'App',
  components: {
    Timetable,
    HelpBar
  },
  data: function() {
    return {
      from: model.getActiveSites().from,
      to: model.getActiveSites().to,
      appVersion: process.env.VUE_APP_VERSION
    }
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
#version {
  color: rgb(63, 63, 63);
  font-size: 0.7em;
}
h2 {
  font-size: 80%;
}
h1 {
  font-size: 110%;
}
a:visited {
  color:grey;
}
a {
  color:gray;
}
</style>
