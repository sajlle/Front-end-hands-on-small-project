import { createRouter, createWebHistory } from 'vue-router'
import Recommend from '../views/recommend/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Recommend
        }
    ]
})

export default router