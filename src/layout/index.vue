<template>
  <div id="app-layout">
    <Header />
    <el-container class="app-container">
      <el-aside class="app-aside">
        <Menu />
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import Header from "./components/header";
import Menu from "./components/menu";
export default {
  name: "",
  components: {
    Header,
    Menu,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>

</style>