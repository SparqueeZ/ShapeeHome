import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CreateDevisVue from "@/views/CreateDevisView.vue";
import Estimation from "@/views/Estimation.vue";
import Devis from "@/views/Devis.vue";

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
      component: Devis,
    },
    {
      path: "/devis-personnalise",
      component: Estimation,
    },
    {
      path: "/:notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
