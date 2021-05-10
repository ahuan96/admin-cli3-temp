<template>
  <div class="app-header">
      <h1 class="title">后台模板系统</h1>
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

</style>