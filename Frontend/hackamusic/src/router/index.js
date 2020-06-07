import Vue from "vue";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/artistas-mas-escuchados",
    name: "TopArtists",
    component: () => import("../views/TopArtists.vue"),
  },

  {
    path: "/canciones-mas-escuchadas",
    name: "TopTracks",
    component: () => import("../views/TopTracks.vue"),
  },

  /*
  {
    path: "/mas-referenciados",
    name: "TopTags",
    component: () => import("../views/TopTags.vue"),
  },
  */

  {
    path: "*",
    name: "error",
    component: () => import("../views/ErrorView"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
