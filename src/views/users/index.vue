<template>
 
  <div class='users'>
     <div style="margin:30px">
       <el-button type="primary" size="mini" @click="handleSelection">获取选中</el-button>
  </div>

    <BaseTable 
    :data="tableData" 
    :columns="columns" 
    :showPagination="true" 
    :pageNo="pageObj.pageNo" 
    :pageSize="pageObj.pageSize" 
    :totalCount="pageObj.totalCount" 
    @handlePageNoChange="pageNoChange"
    @handlePageSizeChange="pageSizeChange"
    :showIndex="true"
    :showSelection="true"
    :showHandle="true" 
    @handleSelection="handleSelection"
    :loading="loading"
    >
      <template  v-slot:handle="handle">
        <el-button type="primary" size="mini" @click="handleAdd(handle.row)">新增</el-button>
        <el-button type="primary" size="mini" @click="handleEditd(handle.row)">编辑</el-button>
        <el-button type="primary" size="mini" @click="handleDeleted(handle.row)">删除</el-button>
      </template>
    </BaseTable>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      a:2,
      loading:true,
      tableData:[],
      tempData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      columns: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      pageObj:{
        pageNo:1,
        pageSize:10,
        totalCount:0
      }
    }
  },
  created () {

  },
  mounted () {
    // 初始化
    this.initData()
  },
  methods: {
    // 切换页码
    pageNoChange(page){
      this.pageObj.pageNo = page
      this.initData()
      console.log(page)
    },
    // 切换每页大小
    pageSizeChange(size){
      console.log(size)
    },
    // 处理新增
    handleAdd(row){
      console.log('新增',row)
    },
    // 处理编辑
    handleEditd(row){
      console.log('编辑',row)
    },
    // 处理删除
    handleDeleted(row){
      console.log('删除',row)
    },
    //获取选中列
    handleSelection(val){
      console.log(val)
    },
    // 请求数据
    initData(){
      this.loading = true
      // 模拟发送请求
      setTimeout(()=>{
      this.loading = false
      this.tableData = this.tempData
      this.pageObj.pageNo = 1
      this.pageObj.totalCount = 20
    },1000)
    }
  }

}
</script>

<style lang='less' scoped>
</style>