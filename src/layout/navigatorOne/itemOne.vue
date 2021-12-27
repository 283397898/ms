<script lang="ts">export default{name:'itemOne',}</script>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref('')
</script>

<template>
itemOne
<input type="text" v-model="value">
</template>

<style>

</style>