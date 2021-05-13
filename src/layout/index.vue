<template>
  <div id="app-layout">
    <Header />
    <el-container class="app-container">
      <Aside/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import Header from "./components/header";
import Aside from "./components/aside";
export default {
  name: "",
  components: {
    Header,
    Aside,
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