import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import config from './config';

Vue.config.productionTip = false

Vue.use(VueRouter)

function getRouteWithFilter(from, to, alias){
  return { 
    path: '/'+(from+'-'+to).toLowerCase(), 
    component: App,
    alias: alias,
    props: {
      from: from,
      to: to
    }
  }
}

const travelRoutes = [
  getRouteWithFilter('Bagarmossen', 'Rådmansgatan', '/oscar'),
  getRouteWithFilter('Bagarmossen', 'Hötorget', '/anna'),
  getRouteWithFilter('Skarpnäck', 'Rådmansgatan', '/kristian')
]

const allRoutes = travelRoutes.concat([
    { path: '/', component: Home, props:{travelRoutes:travelRoutes}},
    { path: '*', component: Home, props:{travelRoutes:travelRoutes}}
  ]
);

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
  `,
  beforeMount: function() {
    let mode = this.$route.query.mode;
    if (mode) { config.mode = mode }
    // eslint-disable-next-line
    console.log("Client running in mode=" + config.mode);
  }
}).$mount('#app')