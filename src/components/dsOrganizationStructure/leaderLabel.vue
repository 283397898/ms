<script lang="ts" setup>
const props = defineProps(["user"])
console.log(props);

</script>

<template>
    <div class="label">
        <div class="role-name">{{ props.user.roleName }}</div>
        <div class="user-name">{{ props.user.userName }}</div>
    </div>
</template>

<style scoped>
.label {
    border: solid 1px rgb(133, 186, 255);
    cursor: pointer;
}

.role-name {
    background-color: rgb(133, 186, 255);
    font-size: 14px;
}
.role-name,
.user-name {
    text-align: center;
    line-height: 2em;
    padding: 0 1em;
}
</style>