<script lang="ts">export default { name: 'dsOrganizationStructure', }</script>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import LeaderLabel from '../../components/dsOrganizationStructure/leaderLabel.vue';
import LeaderDrawer from '../../components/dsOrganizationStructure/leaderDrawer.vue';
import { User } from '../../type'
const drawerData = reactive({
    isOpen: false,
    user: {
        userId: 0,
        userName: '',
        roleDesc: '',
        roleId: 0,
        roleName: ''
    },
    state: ''
})

// 管理drawer的开关
function changeDrawer() {
    const { isOpen } = drawerData
    drawerData.isOpen = !isOpen
}

// 打开drawer的事件
function openDrawer(user: User, state: string) {
    if (state === 'edit') drawerData.user = user
    changeDrawer()
    drawerData.state = state
}
// 假数据
const userTable = reactive([
    {
        index: 0,
        hierarchical: '领导层',
        labels: [
            {
                userId: 20001, // 用户登录注册 id
                userName: "张强",  // 用户登录注册名
                roleId: 1,  // enum 枚举 0 1 2 3 4 5 6 7 8 9 10
                roleName: "合作方管理委员会负责人",
                roleDesc: "职责描述",
            }
        ]
    }, {
        index: 1,
        hierarchical: '管理层',
        labels: [
            {
                userId: 20002, // 用户登录注册 id
                userName: "强",  // 用户登录注册名
                roleId: 2,  // enum 枚举 0 1 2 3 4 5 6 7 8 9 10
                roleName: "合作方管理委员",
                roleDesc: "职责描述",
            }
        ]
    }
])
</script>

<template>
    <div class="box">
        <div class="line" v-for="leadership in userTable" :key="leadership.index">
            <div class="title-box">
                <div class="title">{{ leadership.hierarchical }}</div>
            </div>
            <div class="label-box">
                <leader-label
                    v-for="user in leadership.labels"
                    :key="user.userId"
                    :user="user"
                    @click="openDrawer(user, 'edit')"
                ></leader-label>
            </div>
        </div>
    </div>
    <leader-drawer :drawerData="drawerData" @close="changeDrawer" />
</template>

<style>
.box {
    display: flex;
    flex-direction: column;
    border-collapse: collapse;
}
.line {
    display: flex;
    width: 100%;
    height: 200px;
    margin-top: 1px;
}
.title-box {
    width: 30px;
}
.label-box {
    flex: 1;
}
.title-box,
.label-box {
    display: flex;
    border: 1px black solid;
    height: 100%;
    margin: 0 0 0 -1px;
    justify-content: space-around;
    align-items: center;
}
.title {
    width: 16px;
    font-size: 16px;
}
</style>