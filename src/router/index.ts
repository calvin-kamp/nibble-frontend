import { calorieCalculatorRoutes } from '@/features/calorie-calculator/calorie-calculator.routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...calorieCalculatorRoutes],
})

export default router
