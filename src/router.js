import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
          path:'/',
          name:'Home',
          component:Home,
        
        },
        {
          path: '/About',
          name: 'about',
          component: () => import('./views/About.vue')
        }, 
        {
          path:'/detail/',
          name:'detail',
          component: () => import('./views/Detail.vue')
        },

    { path: '/movie-detail', redirect:'/detail'}

       
       
       
    ]
})