import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
          path:'/',
          name:'Home',
          component:Home,
          /*children:[
            {
            path:'/movie-detail',
            component:detail

          }]*/
        
        },
        {
          path: '/About',
          name: 'about',
          component: About,
        }, 
        {
          path:'/detail',
          name:'detail',
          component:detail

        },
    { path: '/movie-detail', redirect:'/detail' }

       
       
       
    ]
})