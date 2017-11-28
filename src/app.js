import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import routes from './routes'

import 'vue-material/dist/vue-material.min.css'

// Material design
Vue.use(VueMaterial)

// Router
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})


// Launch
new Vue({
    router
}).$mount('#root')
  