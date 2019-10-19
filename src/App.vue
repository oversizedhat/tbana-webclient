<template>
  <div id="app">
    <HelpBar />
    <Timetable :siteId=home.siteId :dir=home.dir :destFilter=home.filter />
    <Timetable :siteId=work.siteId :dir=work.dir :destFilter=work.filter />
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue'
import HelpBar from './components/HelpBar.vue'

export default {
  name: 'app',
  props:{
    home: Object,
    work: Object
  },
  components: {
    Timetable,
    HelpBar
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
