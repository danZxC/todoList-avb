import { createRouter, createWebHistory } from 'vue-router'

// Импортируем страницы (позже создадим)
import MainPage from '@/components/pages/MainPage.vue'
import TasksPage from '@/components/pages/TasksPage.vue'
import StatisticPage from '@/components/pages/StatisticPage.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainPage
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksPage
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: StatisticPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router