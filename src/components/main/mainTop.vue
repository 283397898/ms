<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from "../../store/store";

const router = useRouter()
const route = useRoute()
const { openPages } = useCounterStore()

// 处理标签关闭
function handleClose(path: string) {
  const index = openPages.findIndex((item) => {
    return item.path === path
  })
  console.log(index);

  const del = openPages.splice(index, 1)
  // 在此页面则跳转
  if (route.name === del[0].name) {
    if (openPages.length === 0) {
      // 无标签跳转到main页面
      router.push({ name: 'main' })
    } else if (openPages.length === index) {
      // 关最后一个标签后跳转前一个标签
      router.push({ name: openPages[index - 1].name })
    } else {
      // 关标签后跳转后一个标签（index不变）
      router.push({ name: openPages[index].name })
    }
  }
}


//处理点击
function toUrl(tag: any) {
  router.push({ name: openPages[tag.index].name })
}

</script>

<template>
  <div style="display: flex;">
    <div class="logo">数据安全管理系统</div>
    <div style="height:60px ;flex: 1 ;display: flex; align-items: center">
      <el-tabs
        v-model="route.path"
        type="card"
        closable
        @tab-click="toUrl"
        @tab-remove="handleClose"
      >
        <el-tab-pane
          v-for="item in openPages"
          style="height: 60px;"
          :key="item.name"
          :label="item.meta.title"
          :name="item.path"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 200px;
  height: 60px;
  background-color: #2c8dff;
  line-height: 60px;
  text-align: center;
  color: white;
}
.el-tabs {
  height: 60px;
}
:deep().el-tabs__item {
  height: 60px;
  line-height: 60px;
  border-bottom: none !important;
}
:deep().el-tabs__header {
  margin-bottom: 0;
  border-bottom: none;
}
:deep().el-tabs__nav {
  border-top: none !important;
  border-radius: 0px !important;
}
:deep().el-tabs__content {
  display: none;
}
</style>