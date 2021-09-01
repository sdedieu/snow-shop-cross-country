import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createWebHistory, createRouter } from "vue-router";
import CrossCountry from "./components/CrossCountry.vue";
import CrossCountryDetails from "./components/CrossCountryDetails.vue";

const routes = [
  {
    path: "/cross-country/items",
    name: "CrossCountry",
    component: CrossCountry,
  },{
    path: "/cross-country/items/:id",
    name: "CrossCountryDetails",
    component: CrossCountryDetails,
  },
  { path: '/cross-country', redirect: { name: 'CrossCountry' }},
  { path: '/', redirect: { name: 'CrossCountry' }}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export class MfeVue extends HTMLElement {
  connectedCallback() {
      
    createApp(App).use(router).mount(this);
  }
}

customElements.define('crosscountry-page-element', MfeVue);
