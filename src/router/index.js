import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import BlogView from "@/views/BlogView.vue";
import RoomsView from "@/views/RoomsView.vue";
import RoomDetailView from "@/views/RoomDetailView.vue";
import PagesContactView from "@/views/PagesContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/rooms",
    name: "rooms",
    component: RoomsView,
  },
  {
    path: "/room-detail",
    name: "room-detail",
    component: RoomDetailView,
  },
  {
    path: "/pages-contact",
    name: "pages-contact",
    component: PagesContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
