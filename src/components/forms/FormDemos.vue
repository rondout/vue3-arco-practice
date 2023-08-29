<template>
  <h2>Login Form</h2>
  <div flex-center>
    <div w-400px p-2 py-3 pb-5 bg-white border-rd-2>
      <h2 my-3 text-primary text-center>Please Login with Your Account</h2>
      <a-form ref="formRef" :rules="rules" px-4 :model="state.loginParams">
        <a-form-item validate-trigger="input" field="email" label="E-mail">
          <a-input placeholder="账户" v-model="state.loginParams.email">
            <template #prefix>
              <icon-email />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item validate-trigger="input" field="password" label="密码">
          <a-input-password placeholder="密码" v-model="state.loginParams.password">
            <template #prefix>
              <icon-palette />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item field="remember" label="">
          <a-checkbox v-model="state.loginParams.remember"> 记住密码</a-checkbox>
        </a-form-item>
        <a-button @click="handleSubmit" type="primary" :loading="state.loading">登录</a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconEmail, IconPalette } from '@arco-design/web-vue/es/icon'
import { FormInstance, FieldRule } from '@arco-design/web-vue'

const formRef = ref<FormInstance>()

const state = reactive({
  loginParams: { email: '', password: '', remember: false },
  loading: false
})

const rules: Record<keyof typeof state.loginParams, FieldRule | FieldRule[]> = {
  email: [
    { required: true, message: '清输入账户' },
    {
      match: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,}$/,
      message: '清输入合法的邮箱地址'
    }
  ],
  password: [
    { required: true, message: '清输入密码' },
    { minLength: 8, message: '密码不能低于8位' }
  ],
  remember: []
}

const handleLogin = () => {
  state.loading = true
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
    .then(() => {
      AMessage.success('登录成功')
    })
    .catch(() => {
      AMessage.error('登录失败')
    })
    .finally(() => {
      state.loading = false
    })
}

const handleSubmit = () => {
  console.log(
    formRef.value
      .validate()
      .then((errors) => {
        if (errors) {
          console.log('校验失败', errors)
        } else {
          console.log('校验成功', state.loginParams)
          handleLogin()
        }
      })
      .catch((err) => {
        console.log('校验失败', err)
      })
  )
}
</script>

<style lang="less" scoped></style>
