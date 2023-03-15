import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/navbarFolder/HomeView.vue'
import WorkoutsView from '../views/navbarFolder/WorkoutsView.vue'
import JournalView from '../views/navbarFolder/JournalView.vue'
import StatsView from '../views/navbarFolder/StatsView.vue'
import AdminView from '../views/navbarFolder/AdminView.vue'
import UserProfile from '../views/otherViews/UserProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: WorkoutsView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatsView
    },
    {
      path: '/journal',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView

    },
    {
      path: '/user-profile',
      name: 'userprofile',
      component: UserProfile
    }
  ]
})

export default router
