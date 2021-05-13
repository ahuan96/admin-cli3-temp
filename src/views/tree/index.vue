<template>
  <div class='tree'>
    <div style="margin:30px;">
      <el-button type="primary" size="mini" @click="confimChoose">获取选中id</el-button>
    </div>

    <div style="margin:30px;font-size:20px;">{{currentIds}}</div>

    <Tree :list="list" :defaultOpenAll="true"></Tree>
  </div>
</template>

<script>
import Tree from 'components/Tree'
export default {
  name: '',
  components: {
    Tree
  },
  data () {
    return {
      list: [
        { id: 1, name: '一级-1' },
        {
          id: 2, name: '一级-3',
          child: [
            { id: 2001, name: '二级-1' },
            { id: 2002, name: '二级-2' },
          ]
        },
        {
          id: 3, name: '一级-4',
          child: [
            { id: 3001, name: '二级-1' },
            {
              id: 3002, name: '二级-2',
              child: [
                { id: 3002001, name: '三级-1' },
                { id: 3002002, name: '三级-2' },
              ]
            },
          ]
        },
      ],
      currentIds: ''
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    confimChoose () {
      let data = []
      console.log(this.list)
      this.getChoose(this.list, data)
      console.log(data.join(','))
      this.currentIds = data.join(',')
    },
    getChoose (arr, data) {
      arr.forEach(item => {
        if (item.checked) {
          data.push(item.id)
        }
        if (item.child && item.child.length > 0) {
          this.getChoose(item.child, data)
        }
      })
    }
  }

}
</script>

<style lang='less' scoped>
</style>