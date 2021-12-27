const DSSM = ()=> import('../layout/dsSystemManagement/index.vue')
const main = () => import('../layout/main.vue')
export const dsSystemManagement = [
    {
        path: 'DSSM',
        name: 'DSSM',
        component: main,
        redirect:{name: "dsSystemManagement"},
        children: [
            {
                path: 'dsSystemManagement',
                name: 'dsSystemManagement',
                component: DSSM,
                meta:{
                    title: '数据安全制度管理',
                    keepAlive: true
                }
            }    
        ]
    }
]