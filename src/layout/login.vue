<script setup lang="ts">
import {useRouter} from 'vue-router'

function login() {
  useRouter().push({name: "main"})
}
</script>

<template>
  <div>login</div>
  <el-button @click="login">login</el-button>
</template>

<style scoped>

</style>