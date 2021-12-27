<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { User } from '../../type';
const { drawerData } = defineProps(['drawerData'])
// const user = reactive(JSON.parse(JSON.stringify(drawerData.user)))
let user = ref<User>({
    userId: 0,
    userName: '',
    roleDesc: '',
    roleId: 0,
    roleName: ''
})
let state = ref('')
function getUser() {
    user.value = JSON.parse(JSON.stringify(drawerData.user))
    state.value = drawerData.state
}
let drawer = ref(null)
const emit = defineEmits(['changeDrawer'])
</script>

<template>
    <el-drawer
        :model-value="drawerData.isOpen"
        title="委员详情"
        direction="rtl"
        :size="555"
        :destroy-on-close="true"
        @close="emit('changeDrawer')"
        @open="getUser"
        ref="drawer"
    >
        <el-form :model="user" label-width="auto" label-position="left">
            <el-form-item label="负责人名字：">
                <el-input v-model="user.userName"></el-input>
            </el-form-item>
            <el-form-item label="负责人职位：">
                <el-input v-model="user.roleName"></el-input>
            </el-form-item>
            <el-form-item label="职责描述：">
                <el-input type="textarea" v-model="user.roleDesc" :rows="3"></el-input>
            </el-form-item>
        </el-form>
        <div class="button-group">
            <el-button>
                <span>确认</span>
                <span v-if="state === 'edit'">修改</span>
                <span v-else>添加</span>
            </el-button>
            <el-button @click="($refs['drawer'] as any).handleClose">
                <span>取消</span>
                <span v-if="state === 'edit'">修改</span>
                <span v-else>添加</span>
            </el-button>
        </div>
    </el-drawer>
</template>

<style scoped>
.button-group {
    display: flex;
    flex-direction: row-reverse;
}
.button-group .el-button {
    margin-left: 20px;
}
</style>