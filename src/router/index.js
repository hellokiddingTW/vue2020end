//官方的元件
import Vue from 'vue'
import VueRouter from 'vue-router'


//自訂的元件
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import Login from'@/components/pages/Login';
import card2 from'@/components/pages/child2';
import card3 from'@/components/pages/child3';
import Menu from'@/components/pages/menu';



Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: '首頁',
            path: '/index',
            component: Home
        },
        {
            name: '登入',
            path: '/login',
            component: Login,
        }
    ]
})