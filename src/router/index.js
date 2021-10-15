//路由器组件
import VueRouter from "vue-router"


import School from '../pages/School'
import Student from '../pages/Student'
import Cs from '../pages/Cs.vue'
import Schstu from '../pages/Schstu.vue'
import Dhgd from '../pages/Dhgd.vue'
import Donghua from '../pages/Test.vue'
import Guodu from '../pages/Test1.vue'
import Dsanf from '../pages/Test2.vue'
import Demo from '../pages/demo1.vue'
import Cate from '../pages/Cate.vue'
import Vuexs from '../pages/vuexs.vue'
import Count from '../pages/count.vue'
import Person from '../pages/Person.vue'
import Vxdemo from '../pages/Vxdemo.vue'


const router = new VueRouter({
    routes:[
        {
            path:'/schstu',
            component:Schstu,
            children:[
                {
                    path:'school',
                    component:School
                },
                {
                    path:'stu',
                    component:Student
                },
                {
                    path:'cs',
                    component:Cs
                }
            ]
        },
        {
            path:'/dhgd',
            component:Dhgd,
            children:[
                {
                    path:'donghua',
                    component:Donghua
                },
                {
                    path:'guodu',
                    component:Guodu
                },
                {
                    path:'dsanf',
                    component:Dsanf
                }
            ]
        },
        {
            path:'/demo',
            component:Demo
        },
        {
            path:'/cate',
            component:Cate
        },
        {
            path:'/vuexs',
            component:Vuexs,
            children:[
                {
                    path:'count',
                    component:Count
                },
                {
                    path:'person',
                    component:Person
                },
                {
                    path:'vxdemo',
                    component:Vxdemo
                }
            ]
        }
        
    ]
})
export default router