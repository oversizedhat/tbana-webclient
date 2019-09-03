<template>
  <div id="app">
    <!-- 9140 = skarpnäck, https://api.sl.se/api2/typeahead.json?key=&searchstring=&stationsonly=True&maxresults=10-->
    <Timetable siteId="9141" dir="1" />
    <Timetable siteId="9118" dir="2" destFilter="Skarpnäck"/>
  </div>
</template>

<script>
import Timetable from './components/Timetable.vue'

export default {
  name: 'app',
  components: {
    Timetable
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
