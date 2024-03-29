import VueRouter from 'vue-router'
import Vue from 'vue'


import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;
