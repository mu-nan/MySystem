<!--
 * @FilePath: loginView.vue
 * @Author: wanghng
 * @Date: 2023-03-02 14:59:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-03 15:00:15
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:  
-->
<template>
  <div class="login">
    <h1 class="login-title">Mu-nan 后端管理系统</h1>
    <el-form ref="loginFormRef" :model="loginFromData" status-icon :rules="loginFormRef" label-width="0" class="login-form">
      <el-form-item label="" prop="username">
        <el-input v-model="loginFromData.username" placeholder="请输入账号" autocomplete="off" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input v-model="loginFromData.password" placeholder="请输入密码" type="password" autocomplete="off" />
      </el-form-item>
      <!-- <el-form-item label="" prop="code">
        <el-input placeholder="请输入验证码" v-model.number="loginFromData.code" />
      </el-form-item> -->
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitLogin(loginFormRef)">登录
        </el-button>
        <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { initData } from '../types/login'
import type { FormInstance } from "element-plus";
// import {ElMessage} from "element-plus";
import { loginFuncation } from '../http/api';
import { useRouter } from "vue-router";


export default defineComponent({
  setup() {
    const router = useRouter();
    const data = reactive(
      new initData(),
    );
    // 表单验证规则
    const loginFormRef = {
      username: [
        { required: true, message: "账号不能为空", trigger: "blur" },
        {
          min: 4,
          max: 8,
          message: "账号长度应在4到8位之间",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "密码不能为空", trigger: "blur" },
      ],
      code: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
    };
    const submitLogin = (loginFormRef: FormInstance) => {
      loginFormRef.validate((valid: boolean)=>{
        if(valid){
          loginFuncation(data.loginFromData).then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            router.push('/')
          })
        }
      })
    };
    return {
      ...toRefs(data),
      loginFormRef,
      submitLogin
    };
  },
});
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../images/login/login.gif') repeat;
  background-size: 100% 100%;

  .login-title {
    position: relative;
    top: 15vh;
    background-image: linear-gradient(45deg,
        #3498db,
        #27ae60,
        #9b59b6,
        #3498db,
        #f39c12,
        #d35400);
    background-size: 800%;
    background-clip: text;
    color: transparent;
    text-align: center;
    animation: titleAnimation 50s infinite;
  }

  @keyframes titleAnimation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .login-form {
    width: 20%;
    position: relative;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);

    :deep(.el-input__wrapper) {
      background-color: transparent !important;
    }

    :deep(.login-btn) {
      width: 100%;
      background: rgba($color: #000000, $alpha: 0.8);
      border: 0px;
      border-radius: 50px;
    }
  }
}
</style>