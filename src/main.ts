import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {createPinia} from 'pinia';
import {router} from "./router";
import * as icons from '@element-plus/icons-vue'

const app = createApp(App)

app.use(createPinia());
app.use(ElementPlus)
app.use(router)
// 全局添加所有icon组件
Object.keys(icons).forEach((iconName)=>{
    app.component(iconName,(icons[iconName as keyof typeof icons]))
})

app.mount('#app')
