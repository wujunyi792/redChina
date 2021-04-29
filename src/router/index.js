import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/timeline',
        name: 'Timeline',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Timeline')
    },
    {
        path: '/study',
        name: 'Tips',
        component: () => import('../views/Tips')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
