import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/layout/Master'

import {
    Profile
} from './components'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: App,
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: Profile
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

new Vue({
    router
}).$mount('#root')
  