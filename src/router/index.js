import {createRouter, createWebHistory} from 'vue-router'

// Definimos las rutas
const routes = [
    {
        path: '/frontendPokedex',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: 'frontendPokedex/:id',
        name: 'details',
        component: () => import('../views/Details.vue')
    }
]

// Creamos el router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router