import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/study/ref',
      name: 'ref',
      component: () => import('@/views/chapter/studyRef.vue')
    },
    {
      path: '/study/props',
      name: 'props',
      component: () => import('@/views/chapter/studyProps.vue')
    }
  ]
})

export default router
