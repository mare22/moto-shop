import { createRouter, createWebHistory} from 'vue-router'

import Products from '../pages/Products.vue'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/products',
        component: Products
    },
    {
        path: '/',
        component: Home
    }
   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router