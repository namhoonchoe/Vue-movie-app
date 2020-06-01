import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'


Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
           
        },
        {
            path: '/About/:id',
            name: 'about',
            component: About
        },
        {
            path: '/Detail',
            name: 'detail',
            component: Detail
        }
       
    ]
})