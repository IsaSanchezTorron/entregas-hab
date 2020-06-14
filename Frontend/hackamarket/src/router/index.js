import Vue from "vue";
import VueRouter from "vue-router";
import Productos from "../views/Productos.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

Vue.use(VueRouter);

const routes = [
  //El login es de acceso para anónimos con lo cual, para todo el mundo.
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      allowAnonymous: true,
    },
  },

  //About es sólo para usuarios registrados, admin o no, en todo caso no anónimos.
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      allowAnonymous: false,
    },
  },

  // Registrar es permitido para anónimos, everybody let's go.
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      allowAnonymous: true,
    },
  },

  // La ruta de productos es para usuarios registrados.
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/Productos.vue"),
    meta: {
      allowAnonymous: false,
    },
  },

  // El acceso a ambas rutas de clientes son reservadas al rol de "admin".

  {
    path: "/clientes",
    name: "Clientes",
    component: () => import("../views/Clientes.vue"),
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
  },

  {
    path: "/add-client",
    name: "AddClients",
    component: () => import("../views/AddClients.vue"),

    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
  },

  //Este path recoge cualquier ruta errónea en el navegador,
  // elegimos mostrar nuestra vista personalizada
  // de error para hacerle saber al usuario qué está pasando.
  {
    path: "*",
    name: "error",
    component: () => import("../views/Error.vue"),
  },
];
const router = new VueRouter({
  routes,
});

//COMPROBANDO CADA PÁGINA POR SI LA PERSONA ESTÁ LOGUEADA

router.beforeEach((to, from, next) => {
  //Si la ruta es privada y la persona no tiene token
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }
  if (to.meta.allowNoAdmin === false && !checkAdmin()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
