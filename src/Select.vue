<template>
  <div>
    <div class="header">
      {{ headerText }}
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
    },
    headerText: function () {
      return this.selected.length > 0?"Vart ska du åka?":"Varifrån åker du?";
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
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  min-height:35px;
}
.header {
  background-color: rgb(71, 71, 223);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.selected {
  position: -webkit-sticky;
  position: sticky;
  top: 35px;
  background-color: green;
}
</style>
