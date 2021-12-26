<template>
  <div class="login-panel">
    <h1 class="title">登录</h1>
    <login-account ref="accountRef" />
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'

export default defineComponent({
  components: {
    LoginAccount
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    // 2.定义方法
    const handleLoginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }

    return {
      isKeepPassword,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="scss">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
