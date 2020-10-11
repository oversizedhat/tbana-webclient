import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Select from './Select.vue'
import config from './config.js';
import model from './datamodel.js';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const staticRoutes = [
  { path: '/', component: App, meta: { requiresSites: true }},
  { path: '/select', component: Select},
  { path: '*', component: Select}
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: staticRoutes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresSites)) {
    if (!model.hasActiveSites()) {
      next({
        path: '/select'
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
  beforeMount: function() {
    let mode = this.$route.query.mode;
    if (mode) { config.mode = mode }
    // eslint-disable-next-line
    console.log("Client running in mode=" + config.mode);
  },
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')