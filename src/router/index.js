import Vue from 'vue'
import Router from 'vue-router'
import Parent from '../components/Parent'
import First from '../components/First'
import Second from '../components/Second'
import Done from '../components/Done'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent,
      children: [
        {
          path: 'First',
          name: 'First',
          component: First
        },
        {
          path: 'Second',
          name: 'Second',
          component: Second
        },
        {
          path: 'Done',
          name: 'Done',
          component: Done
        }
      ]
    }
  ]
})

export default router
