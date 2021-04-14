<template>
  <div id="">
    <Header />
    <el-container>
      <el-aside>
        <Menu />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>


<script>
import Header from "./header";
import Menu from "./menu";
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