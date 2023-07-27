import {createRouter,createWebHistory} from 'vue-router'

import UpdateTask from "../views/UpdateTask.vue"
import Home from "../views/Home.vue"
import AddTask from "../components/AddTask.vue"
const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    }
    ,
    {
        path:'/update/:id',
        name:'update',
        component:UpdateTask
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router