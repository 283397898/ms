import {createRouter, createWebHashHistory} from 'vue-router'

const error = () => import('../layout/error.vue')
const login = () => import('../layout/login.vue')
const app = () => import('../app.vue')
import {navigatorOnePages} from "./navigatorOne";
import {homePage} from "./home";
import {dsOrganizationStructure} from './dsOrganizationStructure'
import {dsSystemManagement} from './dsSystemManagement'
// main的路由树，由树生成对应菜单
// 由此添加一类路由
export const mainTree = [
    ...navigatorOnePages,
    ...dsOrganizationStructure,
    ...dsSystemManagement
]

const routes = [
    {
        path: '/',
        name: 'app',
        component: app,
        children: [
            {
                path: 'login',
                name: 'login',
                component: login,
            },
            ...homePage,
            ...mainTree
        ]
    },
    {
        path: '/404',
        name: '404',
        component: error
    },
    // 未匹配路由去404页面
    // {
    //     path: '/:pathMatch(.*)',
    //     redirect: '/404'
    // }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

