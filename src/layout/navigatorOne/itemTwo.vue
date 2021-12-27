<script lang="ts">export default{name:'itemTwo',}</script>
<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('')
</script>

<template>
itemTwo
<input type="text" v-model="value">
</template>

<style>

</style>