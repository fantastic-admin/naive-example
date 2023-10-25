<route lang="yaml">
meta:
  title: 登录
  constant: true
  layout: false
</route>

<script setup lang="ts">
import type { FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import Copyright from '@/layouts/components/Copyright/index.vue'
import useUserStore from '@/store/modules/user'

defineOptions({
  name: 'Login',
})

const route = useRoute()
const router = useRouter()

const userStore = useUserStore()

const banner = new URL('../assets/images/login-banner.png', import.meta.url).href
const title = import.meta.env.VITE_APP_TITLE

// 表单类型，login 登录，register 注册，reset 重置密码
const formType = ref('login')
const loading = ref(false)
const redirect = ref(route.query.redirect?.toString() ?? '/')

const message = useMessage()

// 登录
const loginFormRef = ref()
const loginForm = ref({
  account: localStorage.login_account || '',
  password: '',
  remember: !!localStorage.login_account,
})
const loginRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
})
function handleLogin() {
  loginFormRef.value && loginFormRef.value.validate().then(() => {
    loading.value = true
    userStore.login(loginForm.value).then(() => {
      loading.value = false
      if (loginForm.value.remember) {
        localStorage.setItem('login_account', loginForm.value.account)
      }
      else {
        localStorage.removeItem('login_account')
      }
      router.push(redirect.value)
    }).catch(() => {
      loading.value = false
    })
  })
}

// 注册
const registerFormRef = ref()
const registerForm = ref({
  account: '',
  captcha: '',
  password: '',
  checkPassword: '',
})
const registerRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  captcha: [
    { required: true, trigger: 'blur', message: '请输入验证码' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
  checkPassword: [
    { required: true, trigger: 'blur', message: '请再次输入密码' },
    {
      validator: (rule: FormItemRule, value: string) => {
        if (value !== registerForm.value.password) {
          return new Error('两次输入的密码不一致')
        }
        else {
          return true
        }
      },
    },
  ],
})
function handleRegister() {
  message.info('注册模块仅提供界面演示，无实际功能，需开发者自行扩展')
  registerFormRef.value && registerFormRef.value.validate().then(() => {
    // 这里编写业务代码
  }).catch(() => {
    // 这里编写业务代码
  })
}

// 重置密码
const resetFormRef = ref()
const resetForm = ref({
  account: localStorage.login_account,
  captcha: '',
  newPassword: '',
})
const resetRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  captcha: [
    { required: true, trigger: 'blur', message: '请输入验证码' },
  ],
  newPassword: [
    { required: true, trigger: 'blur', message: '请输入新密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
})
function handleReset() {
  message.info('重置密码仅提供界面演示，无实际功能，需开发者自行扩展')
  resetFormRef.value && resetFormRef.value.validate().then(() => {
    // 这里编写业务代码
  }).catch(() => {
    // 这里编写业务代码
  })
}

function testAccount(account: string) {
  loginForm.value.account = account
  loginForm.value.password = '123456'
  handleLogin()
}
</script>

<template>
  <div>
    <div class="bg-banner" />
    <div id="login-box" class="shadow">
      <div class="login-banner">
        <div class="logo shadow" />
        <img :src="banner" class="banner">
      </div>
      <NForm v-show="formType === 'login'" ref="loginFormRef" :model="loginForm" :rules="loginRules" :show-label="false" class="login-form">
        <div class="title-container">
          <h3 class="title">
            欢迎来到 {{ title }} ! 👋🏻
          </h3>
        </div>
        <div>
          <NFormItem path="account">
            <NInput v-model:value="loginForm.account" size="large" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </NInput>
          </NFormItem>
          <NFormItem path="password">
            <NInput v-model:value="loginForm.password" type="password" show-password-on="click" size="large" placeholder="密码" tabindex="2" @keyup.enter="handleLogin">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </NInput>
          </NFormItem>
        </div>
        <div class="flex-bar">
          <NCheckbox v-model:checked="loginForm.remember">
            记住我
          </NCheckbox>
          <NButton text type="primary" @click="formType = 'reset'">
            忘记密码了?
          </NButton>
        </div>
        <NButton :loading="loading" type="primary" size="large" style="width: 100%;" @click.prevent="handleLogin">
          登录
        </NButton>
        <div class="sub-link">
          <NSpace justify="center">
            <span class="text">还没有帐号?</span>
            <NButton text type="primary" @click="formType = 'register'">
              创建新帐号
            </NButton>
          </NSpace>
        </div>
        <div style="margin-bottom: -20px;">
          <NDivider>演示账号一键登录</NDivider>
          <NSpace justify="center">
            <NButton type="primary" size="small" @click="testAccount('admin')">
              admin
            </NButton>
            <NButton size="small" @click="testAccount('test')">
              test
            </NButton>
          </NSpace>
        </div>
      </NForm>
      <NForm v-show="formType === 'register'" ref="registerFormRef" :model="registerForm" :rules="registerRules" :show-label="false" class="login-form">
        <div class="title-container">
          <h3 class="title">
            探索从这里开始! 🚀
          </h3>
        </div>
        <div>
          <NFormItem path="account">
            <NInput v-model:value="registerForm.account" size="large" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </NInput>
          </NFormItem>
          <NFormItem path="captcha">
            <NInputGroup>
              <NInput v-model:value="registerForm.captcha" size="large" placeholder="验证码" tabindex="2">
                <template #prefix>
                  <SvgIcon name="ic:baseline-verified-user" />
                </template>
              </NInput>
              <NButton size="large">
                发送验证码
              </NButton>
            </NInputGroup>
          </NFormItem>
          <NFormItem path="password">
            <NInput v-model:value="registerForm.password" type="password" show-password-on="click" size="large" placeholder="密码" tabindex="3">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </NInput>
          </NFormItem>
          <NFormItem path="checkPassword">
            <NInput v-model:value="registerForm.checkPassword" type="password" show-password-on="click" size="large" placeholder="确认密码" tabindex="4">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </NInput>
          </NFormItem>
        </div>
        <NButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleRegister">
          注册
        </NButton>
        <div class="sub-link">
          <NSpace justify="center">
            <span class="text">已经有帐号?</span>
            <NButton text type="primary" @click="formType = 'login'">
              去登录
            </NButton>
          </NSpace>
        </div>
      </NForm>
      <NForm v-show="formType === 'reset'" ref="resetFormRef" :model="resetForm" :rules="resetRules" :show-label="false" class="login-form">
        <div class="title-container">
          <h3 class="title">
            忘记密码了? 🔒
          </h3>
        </div>
        <div>
          <NFormItem path="account">
            <NInput v-model:value="resetForm.account" size="large" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </NInput>
          </NFormItem>
          <NFormItem path="captcha">
            <NInputGroup>
              <NInput v-model:value="resetForm.captcha" size="large" placeholder="验证码" tabindex="2">
                <template #prefix>
                  <SvgIcon name="ic:baseline-verified-user" />
                </template>
              </NInput>
              <NButton size="large">
                发送验证码
              </NButton>
            </NInputGroup>
          </NFormItem>
          <NFormItem path="newPassword">
            <NInput v-model:value="resetForm.newPassword" type="password" show-password-on="click" size="large" placeholder="新密码" tabindex="3">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </NInput>
          </NFormItem>
        </div>
        <NButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleReset">
          确认
        </NButton>
        <div class="sub-link">
          <NButton text type="primary" @click="formType = 'login'">
            去登录
          </NButton>
        </div>
      </NForm>
    </div>
    <Copyright />
  </div>
</template>

<style lang="scss" scoped>
[data-mode="mobile"] {
  #login-box {
    position: relative;
    width: 100%;
    height: 100%;
    top: inherit;
    left: inherit;
    transform: translateX(0) translateY(0);
    flex-direction: column;
    justify-content: start;
    border-radius: 0;
    box-shadow: none;

    .login-banner {
      width: 100%;
      padding: 20px 0;

      .banner {
        position: relative;
        right: inherit;
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
        display: inherit;
        top: inherit;
        transform: translateY(0);
      }
    }

    .login-form {
      width: 100%;
      min-height: auto;
      padding: 30px;
    }
  }

  .copyright {
    position: relative;
  }
}

:deep(input[type="password"]::-ms-reveal) {
  display: none;
}

.bg-banner {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--g-container-bg), var(--g-bg));
}

#login-box {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: var(--g-container-bg);
  border-radius: 10px;
  overflow: hidden;

  .login-banner {
    position: relative;
    width: 450px;
    background-color: var(--g-bg);
    overflow: hidden;

    .banner {
      width: 100%;

      @include position-center(y);
    }

    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      background: url("../assets/images/logo.png") no-repeat;
      background-size: contain;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 500px;
    width: 500px;
    padding: 50px;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        font-size: 1.3em;
        margin: 0 auto 30px;
        font-weight: bold;
      }
    }
  }

  :deep(.ant-divider-inner-text) {
    background-color: var(--g-container-bg);
  }

  .flex-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sub-link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
  }
}

.copyright {
  position: absolute;
  bottom: 0;
  padding: 20px;
  margin: 0;
  width: 100%;
}
</style>
