<template>
  <el-aside class="app-aside" width=null>
    <el-menu default-active="1-4-1"  :class="!isOpen?'app-menu-close':'' " class="app-menu" @open="handleOpen" @close="handleClose" :collapse="!isOpen" :unique-opened="true" background-color="#324158" 
    text-color="#b2c0d2" 
    :router="true"
    :collapse-transition="false"
    >
      <el-menu-item index="/workbench">
        <i class="el-icon-menu"></i>
        <span slot="title">工作台</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">用户信息</span>
        </template>
        <el-menu-item index="/users/index">用户列表</el-menu-item>
        <el-menu-item index="1-2">角色管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/tree/index">
        <i class="el-icon-s-data"></i>
        <span slot="title">树形控件</span>
      </el-menu-item>
      <el-menu-item index="/404">
        <i class="el-icon-s-release"></i>
        <span slot="title">404页面</span>
      </el-menu-item>
    </el-menu>

    <div class="app-menu-switch">
      <el-switch
        v-model="isOpen"
        active-color="#ffd639"
        inactive-color="#6b6b6b">
      </el-switch>
    </div>
  </el-aside>
</template>


<script>
export default {
  data () {
    return {
      isOpen: true,
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>