import {useRouter} from 'vue-router';
import {defineStore} from 'pinia'
import {reactive} from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const router = useRouter()
    // const route = useRoute()
    // 遍历路由存储需要缓存组件的名字
    const include = reactive<string[]>([])
    router.getRoutes().forEach((item) => {
        if (item.meta.keepAlive)
            include.push((item.name) as string)
    })
    // 标签页数组
    const openPages = reactive<any[]>([])
    // 添加标签页的方法
    function addOpenPage(route:any) {
        openPages.push(JSON.parse(JSON.stringify(route)))
    }

    return {
        include,
        addOpenPage,
        openPages,
    }
})
