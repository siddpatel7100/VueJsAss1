import Vue from 'vue'
import App from "./App"
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import tableview from "@/Views/tableview";
import HelloWorld from "@/Views/HelloWorld";
import ProductGrid from "@/Views/ProductGrid";

const routes=[
  {path:"/helloworld",component:HelloWorld},
  {path:"/tableview",component: tableview},
  {path: "/productgrid",component: ProductGrid}
]
const router= new VueRouter({
  routes
})
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  el:"#app",
  router:router,
  render: h => h(App),
}).$mount('#app')
