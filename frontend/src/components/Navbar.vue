<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/login">登录</el-menu-item>
    <el-menu-item index="/register">注册</el-menu-item>
    <el-menu-item index="/ground">广场</el-menu-item>
    <el-menu-item index="/information">消息</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { ElMenu, ElMenuItem } from 'element-plus';
import { useRouter } from 'vue-router';

// 当前激活的菜单项索引
const activeIndex = ref('/');
const router = useRouter();

// 菜单项点击处理函数
const handleSelect = (index) => {
  // 这里可以根据索引进行路由跳转等操作，此处仅作示例
  activeIndex.value = index;
  router.push(index);
};
</script>

<style scoped>
.el-menu {
  border-bottom: 1px solid #e4e7ed;
}
</style>
