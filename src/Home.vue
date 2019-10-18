<template>
  <div>
      <router-link v-bind:style="{padding:'8px'}" v-for="route in travelRoutes" v-bind:key="route.path" :to=route.path>{{route.path}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props:{
   travelRoutes: {
      type: Array,
      required: true
    }
  },
  components: {}
}
</script>

<style scoped>
div {
  font-size: larger;
  color: #dedede;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
</style>
