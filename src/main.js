import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from "./App"
import VueRouter from 'vue-router'
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import * as mdbvue from 'mdbvue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import tableview from "@/Views/tableview";
import editProfile from "@/Views/EditProfile"
import ProductGrid from "@/Views/ProductGrid";
import itemDetail from "@/Views/itemDetail";
import cart from "@/Views/cart";
import summary from "@/Views/summary";
import emptyCart from "@/Views/emptyCart";
import checkout from "@/Views/checkout";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSimpleAlert from "vue-simple-alert";
import {store} from "@/store/store";

const routes = [
    {path: "/helloworld", component:editProfile},
    {path: "/tableview", component: tableview, name: "tableview"},
    {path: "/productgrid", component: ProductGrid},
    {path: "/", component: ProductGrid},
    {path: "/itemDetail", component: itemDetail, name: "itemDetail"},
    {path: "/cart", component: cart, name: "cart"},
    {path: '/summary', component: summary},
    {path: '/emptyCart', component: emptyCart},
    {path: '/checkout',component: checkout, name: 'checkout'}

]
const router = new VueRouter({
    routes
})
for (const component in mdbvue) {
    Vue.component(component, mdbvue[component])
}
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVueIcons)
Vue.use(VueSimpleAlert);
new Vue({
    components:{
    },
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')
