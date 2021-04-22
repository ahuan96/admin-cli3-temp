<template>
  <div class="header">
      我是头
  </div>
</template>

<script>
import {userLogin} from 'api/auth.js'
export default {
  name: '',
  data(){
    return{

    }

  },
  created() {
    console.log(process.env)
    userLogin()
  },
  mounted() {

  },
  methods:{

  }

}
</script>

<style lang='less' scoped>
.header{
    height: 60px;
    line-height: 60px;
    background: #409EFF;
}
</style>