const home = () => import('../layout/main/home.vue')
const main = () => import('../layout/main.vue')
export const homePage = [
    {
        path: 'main',
        name: 'main',
        component: main,
        children: [
            {
                path: 'home',
                name: 'home',
                component: home,
                meta: {
                    title: '欢迎!',
                    keepAlive: true
                },
            },
        ]
    }
]