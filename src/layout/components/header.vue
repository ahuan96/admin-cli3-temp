<template>
  <div class="app-header">
    <h1 class="title">后台模板系统</h1>
    <div class="logOut" @click="logOut"><span>退出</span></div>
  </div>
</template>

<script>
import { userLogin } from 'api/auth.js'
export default {
  name: '',
  data () {
    return {

    }

  },
  created () {
    console.log(process.env)
  },
  mounted () {

  },
  methods: {
    logOut(){
      this.$store.dispatch('user/logOut').then(()=>{
        this.$router.push('/login')
      })  
    }
  }

}
</script>

<style lang='less' scoped>
.app-header {
  position: relative;
  .logOut {
    position: absolute;
    right: 20px;
    background: #fff;
    top: 10px;
    font-size: 16px;
    padding: 10px;
    color: skyblue;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>