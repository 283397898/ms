<script setup lang="ts">
import {mainTree} from "../../router";
import {useRoute} from "vue-router"
const route = useRoute()
</script>

<template>
  <el-menu
      active-text-color="#fff"
      background-color="#02152A"
      text-color="#7E8993"
      :default-active="route.path"
      class="el-menu-vertical-demo"
      router
  >
  <template v-for="item in mainTree">
    <el-sub-menu
        :index="item.path"
        v-if="'meta' in item"
    >
      <template #title>
        <component :is="item.meta.icon" class="el-icon"></component>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item
          v-for="children in item.children"
          :index="`/${item.path}/${children.path}`"
      >
        {{ children.meta.title }}
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item 
      :index="`/${item.path}/${item.children[0].path}`"
      v-if="!('meta' in item)"
    >
      {{item.children[0].meta.title}}
    </el-menu-item>
  </template>
  </el-menu>
</template>

<style scoped>
.is-active {
  background-color: #2C8DFF;
}
.el-menu {
  height: 100%;
  border:0px;
}
:deep().is-opened>div>span{
  color: white;
}
</style>