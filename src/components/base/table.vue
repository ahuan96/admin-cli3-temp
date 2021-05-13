<template>
  <div>
    <el-table :data="data" style="width: 100%" ref="base-table" border v-loading="loading" tooltip-effect="light" element-loading-text="加载中..." element-loading-spinner="el-icon-loading" :highlight-current-row="true">
      <!-- 选择 -->
      <el-table-column v-if="showSelection" type="selection"></el-table-column>
      <!-- 序号 -->
      <el-table-column v-if="showIndex" type="index" label="序号" :width="indexWidth"></el-table-column>

      <!-- 数据源 -->
      <template v-for="(column, index) in columns">
        <el-table-column :prop="column.prop" :label="column.label" :key="index"></el-table-column>
      </template>

      <!-- 操作列 -->
      <el-table-column v-if="showHandle" label="操作">
        <template slot-scope="scope">
          <!-- {{scope.row}} -->
          <slot name="handle" :row="scope.row">888</slot>
        </template>
      </el-table-column>
    </el-table>

    <div class="clear-fix">
      <el-pagination style="margin-top: 10px;" v-if="showPagination" class="pull-right" name="fenYe" background @size-change="pageSizeChange" @current-change="pageNoChange" :page-sizes="pageSizes" layout="prev, pager, next, jumper, sizes, total" :total='totalCount' :page-size="pageSize" :current-page="pageNo">
      </el-pagination>
    </div>
  </div>
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
    // 是否操作列
    showHandle: {
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
    // 显示加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 显示分页
    showPagination: {
      type: Boolean,
      default: false
    },
    // 分页大小列表
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50]
    },
    // 当前页码
    pageNo: {
      type: Number,
      default: 1
    },
    // 当前分页大小
    pageSize: {
      type: Number,
      default: 10
    },
    // 数据总数
    totalCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      a: 1
    }
  },
  mounted () {
  },
  methods: {
    // 分页大小改变
    pageSizeChange (val) {
      this.$emit('handlePageSizeChange', val);
    },
    // 页码改变
    pageNoChange (val) {
      this.$emit('handlePageNoChange', val);
    },
    // 获取选中列
    getSelection () {
      let currentSelect = this.$refs['base-table'].selection
      this.$emit('handleSelection', currentSelect);
      console.log(currentSelect)
    }
  },
}
  </script>