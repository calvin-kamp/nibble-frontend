import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('../../components/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/anmeldung',
        name: 'auth-login',
        component: () => import('./views/LoginView.vue'),
      },
      {
        path: '/registrierung',
        name: 'auth-register',
        component: () => import('./views/RegisterView.vue'),
      },
    ],
  },
]
