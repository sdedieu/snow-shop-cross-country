import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createWebHistory, createRouter } from "vue-router";
import CrossCountry from "@/components/CrossCountry.vue";
import CrossCountryDetails from "@/components/CrossCountryDetails.vue";

const routes = [
  {
    path: "/cross-country",
    name: "CrossCountry",
    component: CrossCountry,
  },{
    path: "/cross-country/:id",
    name: "CrossCountryDetails",
    component: CrossCountryDetails,
  },
  { path: '/', redirect: { name: 'CrossCountry' }}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
