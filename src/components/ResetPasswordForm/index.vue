<script setup lang="ts">
import type { FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'

defineOptions({
  name: 'ResetPasswordForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onResetPassword: [account: string]
}>()

const message = useMessage()

const loading = ref(false)

const formRef = ref()
const form = ref({
  account: props.account ?? localStorage.login_account ?? '',
  captcha: '',
  newPassword: '',
})
const rules = ref<FormRules>({
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
  formRef.value?.validate().then(() => {
    // 这里编写业务代码
    emits('onResetPassword', form.value.account)
  }).catch(() => {
    // 这里编写业务代码
  })
}
</script>

<template>
  <NForm ref="formRef" :model="form" :rules="rules" :show-label="false" class="min-h-500px w-full flex-col-stretch-center p-12">
    <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
      忘记密码了? 🔒
    </h3>
    <div>
      <NFormItem path="account">
        <NInput v-model:value="form.account" size="large" placeholder="用户名" tabindex="1">
          <template #prefix>
            <SvgIcon name="ri:user-3-fill" />
          </template>
        </NInput>
      </NFormItem>
      <NFormItem path="captcha">
        <NInputGroup>
          <NInput v-model:value="form.captcha" size="large" placeholder="验证码" tabindex="2">
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
        <NInput v-model:value="form.newPassword" type="password" show-password-on="click" size="large" placeholder="新密码" tabindex="3">
          <template #prefix>
            <SvgIcon name="ri:lock-2-fill" />
          </template>
        </NInput>
      </NFormItem>
    </div>
    <NButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleReset">
      确认
    </NButton>
    <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
      <NButton text type="primary" @click="emits('onLogin', form.account)">
        去登录
      </NButton>
    </div>
  </NForm>
</template>
