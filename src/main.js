import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "./components/Header"
import Footer from './components/Footer'
import axios from "axios"
import MintUI from "mint-ui" 
import "mint-ui/lib/style.css"
axios.defaults.baseURL="http://localhost:5050";

Vue.prototype.axios=axios;
Vue.use(MintUI)

//将MyHeader组件对象做成了全局组件
 Vue.component("Header",Header);
 Vue.component("Footer",Footer);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
