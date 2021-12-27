<script lang="ts"></script>
<script setup lang="ts">
import {useCounterStore} from '../store/store'
import MainTop from "../components/main/mainTop.vue";
import MainLeft from "../components/main/mainLeft.vue";
import {onMounted, watch} from "vue";
import {useRoute,useRouter} from "vue-router";
const {include, addOpenPage, openPages} = useCounterStore()
const route = useRoute()
const router =useRouter()
// 加载后转到首页
onMounted(()=>{
  router.push({name:'home'})
})
// 监听路由变化
watch(() => route.path, () => {
  // 判断添加标签规则1：标签是否存在
  // 判断添加标签规则2：标签是否有标题
  // 标签数组为全局状态，在main组件下的子路由都应有标题
  let isAdd = true
  openPages.forEach((item) => {
    if (item.name === route.name) {
      isAdd = false
    }
  })
  if (route.meta.title !== undefined && isAdd) {
    addOpenPage(route)
  }
})
</script>

<template>
  <el-container>
    <el-header>
      <main-top/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <main-left/>
      </el-aside>
      <el-main class="main" max-height="600px">
        <el-card>
          <router-view v-slot="{ Component }">
            <keep-alive :include="include">
              <component :is="Component"/>
            </keep-alive>
          </router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  padding: 0;
}
.el-container{
  height: 100%;
}
.main{
  box-shadow:0px 2px 12px rgba(0, 0, 0, 0.2) inset;
}
.el-card,
.el-card__body{
  height: 99%;
}
</style>
