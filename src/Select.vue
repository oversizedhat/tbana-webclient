<template>
  <div>
    <div class="green">Välj två stationer</div>
    <div @click="select" v-for="siteName in allSites" v-bind:key="siteName" >{{siteName}}</div>
  </div>
</template>

<script>
import model from './datamodel.js';

export default {
  name: 'Select',
  props:{},
  data: function(){
    return {
      selected:[]
    }
  },
  components: {},
  computed: {
    allSites: function () {
      const siteNames = model.getAllSiteNames();
      return siteNames.sort();
    }
  },
  methods: {
    select: function(event) {
      const station = ""+event.target.firstChild.data;

      //reset if the station is already selected, TODO make this nicer looking...
      if (station.includes("(Vald)  ")) {
        event.target.firstChild.data = this.selected[0];
        this.selected = [];
       } else {
        this.selected.push(station);

        event.target.firstChild.data = "(Vald)  "+event.target.firstChild.data;
        if (this.selected.length >= 2) {
          
          localStorage.from = this.selected[0];
          localStorage.to = this.selected[1];
          
          setTimeout(()=>{
            this.$router.push("/");
          }, 50);
        }
      }
    }
  },
  mounted() {}
}
</script>

<style scoped>
div {
  font-size: larger;
  color: #dedede;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.green {
  background-color: green;
}
</style>
