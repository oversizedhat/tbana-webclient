<template>
  <div>
    <div class="header">
      Välj två stationer
    </div>
    <div
      v-for="siteName in allSites"
      :key="siteName"
      @click="select"
    >
      {{ siteName }}
    </div>
  </div>
</template>

<script>
import model from './datamodel.js';

export default {
  name: 'Select',
  components: {},
  props:{},
  data: function(){
    return {
      selected:[]
    }
  },
  computed: {
    allSites: function () {
      const siteNames = model.getAllSiteNames();
      return siteNames.sort();
    }
  },
  mounted() {},
  methods: {
    select: function(event) {
      const station = ""+event.target.firstChild.data;

      if (event.target.classList.contains("selected")) {
        event.target.classList.remove("selected");
        this.selected = [];
       } else {
        event.target.classList.add("selected");
        this.selected.push(station);
        
        if (this.selected.length >= 2) {
          model.setActiveSites(this.selected[0], this.selected[1]);
          setTimeout(()=>{
            this.$router.push("/");
          }, 50);
        }
      }
    }
  }
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
.header {
  background-color: rgb(71, 71, 223);
}

.selected {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: green;
}
</style>
