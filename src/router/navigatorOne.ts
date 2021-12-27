const main = () => import('../layout/main.vue')
const itemOne = () => import('../layout/navigatorOne/itemOne.vue')
const itemTwo = () => import('../layout/navigatorOne/itemTwo.vue')
export const navigatorOnePages = [
    {
        path: 'navigatorOne',
        name: 'navigatorOne',
        component: main,
        redirect:{name: "itemOne"},
        meta: {
            icon:'Aim',
            keepAlive: true,
            title: '分类1'
        },
        children: [
            {
                path: 'itemOne',
                name: 'itemOne',
                component: itemOne,
                meta: {
                    title: '页面1',
                    keepAlive: true
                }
            },
            {
                path: 'itemTwo',
                name: 'itemTwo',
                component: itemTwo,
                meta: {
                    title: '页面2',
                    keepAlive: true
                }
            }
        ]
    },
]