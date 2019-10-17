<template>
  <div id="home">
      <router-link v-bind:style="{padding:'8px'}" v-for="route in travelRoutes" v-bind:key="route.path" :to=route.path>{{route.path}}</router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
  props:{
   travelRoutes: {
      type: Array,
      required: true
    }
  },
  components: {}
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: larger;
  background-color:black;
  color: #dedede;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
</style>
