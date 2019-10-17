import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const travelRoutes = [
  { path: '/bagarmossen-rådmansgatan', alias: '/oscar', component: App, props: {home:{siteId:"9141", dir:"1"}, work:{siteId:"9118", dir:"2", filter:"Skarpnäck"}}},
  { path: '/bagarmossen-hötorget', alias: '/anna', component: App, props: {home:{siteId:"9141", dir:"1"}, work:{siteId:"9119", dir:"2", filter:"Skarpnäck"}}},
  { path: '/skarpnäck-rådmansgatan', alias: '/kristian', component: App, props: {home:{siteId:"9140", dir:"1"}, work:{siteId:"9118", dir:"2", filter:"Skarpnäck"}}}
]

const allRoutes = travelRoutes.concat({ path: '/', component: Home, props:{travelRoutes:travelRoutes}});

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: allRoutes
})

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')