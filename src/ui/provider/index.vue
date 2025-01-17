<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'

const settingsStore = useSettingsStore()
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="settingsStore.currentColorScheme === 'dark' ? darkTheme : undefined" style="height: 100%;">
    <NMessageProvider>
      <slot />
      <NGlobalStyle />
    </NMessageProvider>
  </NConfigProvider>
</template>
