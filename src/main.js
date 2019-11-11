import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Select from './Select.vue'
import config from './config.js';
import model from './datamodel.js';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const staticRoutes = [
  { path: '/', component: App, meta: { requiresSitesInStorage: true }},
  { path: '/select', component: Select},
  { path: '*', component: Select}
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: staticRoutes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresSitesInStorage)) {
    const vs = model.isValidSiteName(localStorage.from) && model.isValidSiteName(localStorage.to);
    if (!vs) {
      next({
        path: '/select'/*,
        query: { redirect: to.fullPath }*/
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

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