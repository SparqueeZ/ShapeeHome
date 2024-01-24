import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CreateDevisVue from "@/views/CreateDevisView.vue";
import Estimation from "@/views/Estimation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/devis",
      name: "devis",
      component: CreateDevisVue,
    },
    {
      path: "/estimation",
      component: Estimation,
    },
    {
      path: "/:notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
