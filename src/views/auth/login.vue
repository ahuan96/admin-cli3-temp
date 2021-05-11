<template>
  <div class='login-wrapper'>
    <div class="login-form">
      <div class="login_title">
        <span>系统登录</span>
      </div>
      <div class="login_fields">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="repassword">
            <el-input v-model="ruleForm.repassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

import { userLogin } from 'api/auth'
import { setToken } from 'utils/token'

export default {
  name: '',
  data () {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码必须大于6位'))
      } else {
        callback()
      }
    }

    const validateRePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码必须大于6位'))
      } else if (value != this.ruleForm.password) {
        console.log(this.ruleForm.password)
        callback(new Error('确认密码输入不正确'))
      } else {
        callback()
      }
    }
    
    return {
      ruleForm: {
        name: '',
        password: '',
        repassword: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        repassword: [
          { required: true, trigger: 'blur', validator: validateRePassword }
        ]
      },
      loading: false,
      redirect: ''
    }
  },
  created () {

  },
  mounted () {
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
        // this.$router.push({ path: this.redirect || '/' })
      },
      immediate: true
    }
  },
  methods: {
    submitForm (formName) {
      this.loading = false
      userLogin().then(res => {
        console.log(res)
        const token = res.token
        setToken(token)
        this.$router.push({ path: this.redirect || '/' })
      })
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.loading = false
          return
        }
        this.loading = true


      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<style lang='less' scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: #5a9bd5;
  .login-form {
    border-radius: 10px;
    .login_title {
      color: #000;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      padding-bottom: 30px;
    }
    opacity: 1;
    box-shadow: -15px 15px 15px rgb(6 17 47 / 70%);
    width: 540px;
    height: 410px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 60px;
    background: #fff;
  }
}
</style>