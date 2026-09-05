import { authRoutes } from '@/features/auth/auth.routes'
import { calorieCalculatorRoutes } from '@/features/calorie-calculator/calorie-calculator.routes'
import { recipeRoutes } from '@/features/recipes/recipes.routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layout/DefaultLayout.vue'),
      children: [...calorieCalculatorRoutes, ...recipeRoutes],
    },
    ...authRoutes,
  ],
})

export default router
