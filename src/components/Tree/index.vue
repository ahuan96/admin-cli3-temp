<template>
  <div class='tree'>
    <ul>
      <li v-for="item in list" :key="item.id">
        <el-checkbox @change="change($event,item)" v-model="item.checked">{{item.name}}</el-checkbox> <i v-if="item.child && item.child.length>0" :class="item.showChild?'el-icon-minus':'el-icon-plus'" @click="item.showChild = !item.showChild "></i>
        <tree @calcValue="calcValue" v-show="item.showChild" v-if="item.child && item.child.length>0" :defaultOpenAll="defaultOpenAll" :list="item.child" :_father="item"></tree>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: {
    // tree数据
    list: {
      type: Array,
      default: () => []
    },
    // 是否默认展开
    defaultOpenAll: {
      type: Boolean,
      default: false
    },
    // 内部属性-父级
    _father: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {
    let showChild = this.defaultOpenAll
    let checked = false

    this.list.forEach(item => {
      if (item.child) {
        this.$set(item, 'showChild', showChild)
      }
      this.$set(item, 'checked', checked)
      // this.$set(item,'isIndeterminate',false)
    })
  },
  methods: {
    // 选项改变
    change (val, item) {
      if (item.child && item.child.length > 0) {
        this.setItemFlag(val, item.child)
      }
      this.calcValue()
      this.$emit('calcValue')
    },
    // 递归设置子集
    setItemFlag (val, arr) {
      arr.forEach(item => {
        item.checked = val
        if (item.child && item.child.length > 0) {
          this.setItemFlag(val, item.child)
        }
      })
    },
    // 选项改变-计算全选非全选
    calcValue () {
      let flag = true
      if (this._father) {
        this._father.child.forEach(item => {
          if (!item.checked) {
            flag = false
          }
        })
        this._father.checked = flag
      }
    }
  }

}
</script>

<style scoped>
.tree ul {
  margin-left: 30px;
}
.tree li {
  padding: 10px 0;
  cursor: pointer;
}
</style>
