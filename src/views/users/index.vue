<template>
  <div class=''>
    <h1>用户列表</h1>

    <BaseTable :data="tableData" :columns="columns" :showIndex="true" :showSelection="true"/>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        
      tableData: [{
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
          label: '日期',
          prop: 'date'
        }, {
          label: '姓名',
          prop: 'name'
        }, {
          label: '地址',
          prop: 'address'
        }, 
        {
          label: '操作',
          type:'handle'
        }
      ]
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }

}
</script>

<style lang='less' scoped>
</style>