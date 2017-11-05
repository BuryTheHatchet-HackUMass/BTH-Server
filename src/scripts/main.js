import "../styles/_reset.scss";

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Hatchet from "../pages/Hatchet.vue";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Hatchet },
  { path: '/hatchet/:id', component: Hatchet }
]

// scrollBehavior: https://stackoverflow.com/questions/40341939/how-to-create-anchor-tags-with-vue-router
const router = new VueRouter({
  mode: "history",
  scrollBehavior: function(to, from, savedPosition) {
    console.log(to);    
    if (to.hash) {
        return {
          selector: to.hash, 
          offset: {
            y: 60
          }
        };
    } else {
        return {x: 0, y: 0};
    }
  },
  routes // short for `routes: routes`
});

const app = new Vue({
  router,
  template: "<App/>",
  components: { App }
}).$mount('#app');