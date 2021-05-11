<template>
    <el-menu
      default-active="1-4-1"
      class="app-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :unique-opened="true"
      background-color="#324158"
      text-color="#b2c0d2"
      :router="true"
    >
    <el-menu-item index="/workbench">
        <i class="el-icon-menu"></i>
        <span slot="title">工作台</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户信息</span>
        </template>
          <el-menu-item index="/users/index">用户列表</el-menu-item>
          <el-menu-item index="1-2">角色管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/404">
        <i class="el-icon-setting"></i>
        <span slot="title">404页面</span>
      </el-menu-item>
    </el-menu>
</template>


<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>