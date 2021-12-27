<script lang="ts" setup>
const tableData = [
    {
        file: {
            name: '《中华人民共和国个人信息保护法》',
            url: 'http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml'
        },
    },
    {
        file: {
            name: '《中华人民共和国密码法》',
            url: 'http://www.npc.gov.cn/npc/c30834/201910/6f7be7dd5ae5459a8de8baf36296bc74.shtml'
        },
    },
    {
        file: {
            name: '《中华人民共和国数据安全法》',
            url: 'http://www.npc.gov.cn/npc/c30834/202106/7c9af12f51334a73b56d7938f99a788a.shtml'
        },
    },
    {
        file: {
            name: '《中华人民共和国网络安全法》',
            url: 'http://www.npc.gov.cn/npc/c30834/201611/270b43e8b35e4f7ea98502b6f0e26f8a.shtml'
        },
    },
]
</script>
<template>
    <el-table :data="tableData" border>
        <el-table-column prop="file" label="文件名称（点击下载）" min-width="250">
            <template #default="scope">
                <el-link
                    :href="scope.row.file.url"
                    target="_blank"
                    type="primary"
                >{{ scope.row.file.name }}</el-link>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
</style>