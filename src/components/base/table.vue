<template>
  <el-table :data="data" style="width: 100%">
    <!-- 选择 -->
    <el-table-column v-if="showSelection" type="selection" ></el-table-column>
    <!-- 序号 -->
    <el-table-column v-if="showIndex" type="index" label="序号" :width="indexWidth"></el-table-column>
    <!-- 数据源 -->
    <template v-for="(column, index) in columns">
      <el-table-column v-if="!column.type" :prop="column.prop" :label="column.label" :key="index"></el-table-column>

      <el-table-column v-if="column.type=='handle'" :prop="column.prop" :label="column.label" :key="index"></el-table-column>
    </template>
     
  </el-table>
</template>

 <script>
export default {
  props: {
    // 表格数据
    data: {
      type: Array,
      default: () => []
    },
    // 列字段
    columns: {
      type: Array,
      default: () => []
    },
    // 是否显示序号
    showIndex: {
      type: Boolean,
      default: false
    },
    // 序号宽度
    indexWidth: {
      type: Number,
      default: 80
    },
    //是否显示选择
    showSelection: {
      type: Boolean,
      default: false
    },
    //是否显示选择
    showOperate: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
    }
  },
  mounted () {
  },
}
  </script>