const DSOS = ()=> import('../layout/dsOrganizationStructure/index.vue')
const main = () => import('../layout/main.vue')
export const dsOrganizationStructure = [
    {
        path: 'DSOS',
        name: 'DSOS',
        component: main,
        redirect:{name: "dsOrganizationStructure"},
        children: [
            {
                path: 'dsOrganizationStructure',
                name: 'dsOrganizationStructure',
                component: DSOS,
                meta:{
                    title: '数据安全组织结构',
                    keepAlive: true
                }
            }    
        ]
    }
]