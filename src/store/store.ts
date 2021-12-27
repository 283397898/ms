import {useRouter} from 'vue-router';
import {defineStore} from 'pinia'
import {reactive} from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const router = useRouter()
    // const route = useRoute()
    // ����·�ɴ洢��Ҫ�������������
    const include = reactive<string[]>([])
    router.getRoutes().forEach((item) => {
        if (item.meta.keepAlive)
            include.push((item.name) as string)
    })
    // ��ǩҳ����
    const openPages = reactive<any[]>([])
    // ��ӱ�ǩҳ�ķ���
    function addOpenPage(route:any) {
        openPages.push(JSON.parse(JSON.stringify(route)))
    }

    return {
        include,
        addOpenPage,
        openPages,
    }
})
