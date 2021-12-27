<script lang="ts">import { ref } from 'vue';

export default { name: 'dsSystemManagement' }</script>
<script lang="ts" setup>
import RegulationTable from '../../components/dsSystemManagement/regulationTable.vue';
import StandardsTable from '../../components/dsSystemManagement/standardsTable.vue';
const page = ref('first')
</script>

<template>
    <el-tabs v-model="page">
        <el-tab-pane label="法律法规" name="first">
            <RegulationTable />
        </el-tab-pane>
        <el-tab-pane label="政策文件及标准" name="second">
            <StandardsTable />
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
</style>