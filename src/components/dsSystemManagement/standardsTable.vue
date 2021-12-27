<script setup lang="ts">
const tableData = [
    {
        file: {
            name: '《信息安全技术 个人信息安全规范》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《电信网和互联网数据安全评估规范》',
            url: 'https://www.baidu.com'
        }

    },
    {
        file: {
            name: '《电信网和互联网数据安全风险评估实施方法》',
            url: 'https://www.baidu.com'
        }

    },
    {
        file: {
            name: '《电信网和互联网数据安全通用要求》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《信息安全技术 个人信息安全影响评估指南》',
            url: 'https://www.baidu.com'
        }

    },
    {
        file: {
            name: '《信息安全技术 移动互联网应用程序（App）收集个人信息基本要求》',
            url: 'https://www.baidu.com'
        }

    },
    {
        file: {
            name: '《工业和信息化领域数据安全管理办法》',
            url: 'https://www.baidu.com'
        }

    },
    {
        file: {
            name: '《数据安全合规性评估要点（2020年版）》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《数据安全管理办法（征求意见稿）》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《电信和互联网用户个人信息保护规定》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《电信和互联网行业数据安全标准体系建设指南》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《网络安全实践指南—移动互联网应用基本业务功能必要信息规范》',
            url: 'https://www.baidu.com'
        }
    },
    {
        file: {
            name: '《网络安全标准实践指南—移动互联网应用程序（App）收集使用个人信息自评估指南》',
            url: 'https://www.baidu.com'
        }
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
<style>
</style>