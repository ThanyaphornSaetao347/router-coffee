import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import travelListDetail_1 from '../components/travelListDetail1.vue';
import travelListDetail_2 from '../components/travelListDetail2.vue';
import travelListDetail_3 from '../components/travelListDetail3.vue';
import travelListDetail_4 from '../components/travelListDetail4.vue';
import travelListDetail_5 from '../components/travelListDetail5.vue';
import travelListDetail_6 from '../components/travelListDetail6.vue';
import review from '../components/AReview.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // เส้นทางสำหรับแสดงรายละเอียดของร้านกาแฟ
    {
      path: '/travelListDetail/1',
      name: 'travelListDetail_1',
      component: travelListDetail_1,
      props: true,
    },
    {
      path: '/travelListDetail/2',
      name: 'travelListDetail_2',
      component: travelListDetail_2,
      props: true,
    },
    {
      path: '/travelListDetail/3',
      name: 'travelListDetail_3',
      component: travelListDetail_3,
      props: true,
    },
    {
      path: '/travelListDetail/4',
      name: 'travelListDetail_4',
      component: travelListDetail_4,
      props: true,
    },
    {
      path: '/travelListDetail/5',
      name: 'travelListDetail_5',
      component: travelListDetail_5,
      props: true,
    },
    {
      path: '/travelListDetail/6',
      name: 'travelListDetail_6',
      component: travelListDetail_6,
      props: true,
    },
    {
      path: '/review',
      name: 'Review',
      component: review
    }
  ]
})

export default router