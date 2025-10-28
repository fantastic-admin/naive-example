<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import useSettingsStore from '@/store/modules/settings'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'

const settingsStore = useSettingsStore()

function hslToRgb(h: number, s: number, l: number) {
  s /= 100
  l /= 100
  let r, g, b
  if (s === 0) {
    r = g = b = l // achromatic
  }
  else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hueToRgb(p, q, h + 1 / 3)
    g = hueToRgb(p, q, h)
    b = hueToRgb(p, q, h - 1 / 3)
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}
function hueToRgb(p: number, q: number, t: number) {
  if (t < 0) {
    t += 1
  }
  if (t > 1) {
    t -= 1
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t
  }
  if (t < 1 / 2) {
    return q
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6
  }
  return p
}

const themeOverrides = ref<GlobalThemeOverrides>({
  common: {
    primaryColor: '',
    primaryColorHover: '',
  },
  Button: {
    textColor: '',
  },
})

watch([
  () => settingsStore.settings.app.colorScheme,
  () => settingsStore.settings.app.radius,
], () => {
  const rootStyles = getComputedStyle(document.documentElement)
  const primaryColor = hslToRgb(
    Number.parseFloat(rootStyles.getPropertyValue('--primary').split(' ')[0]),
    Number.parseFloat(rootStyles.getPropertyValue('--primary').split(' ')[1]),
    Number.parseFloat(rootStyles.getPropertyValue('--primary').split(' ')[2]),
  )
  const foregroundColor = hslToRgb(
    Number.parseFloat(rootStyles.getPropertyValue('--foreground').split(' ')[0]),
    Number.parseFloat(rootStyles.getPropertyValue('--foreground').split(' ')[1]),
    Number.parseFloat(rootStyles.getPropertyValue('--foreground').split(' ')[2]),
  )
  const backgroundColor = hslToRgb(
    Number.parseFloat(rootStyles.getPropertyValue('--background').split(' ')[0]),
    Number.parseFloat(rootStyles.getPropertyValue('--background').split(' ')[1]),
    Number.parseFloat(rootStyles.getPropertyValue('--background').split(' ')[2]),
  )
  themeOverrides.value = {
    common: {
      primaryColor: `rgb(${primaryColor.join(',')})`,
      primaryColorHover: `rgba(${primaryColor.join(',')},0.8)`,
      primaryColorPressed: `rgb(${primaryColor.join(',')})`,
      bodyColor: `rgb(${backgroundColor.join(',')})`,
      borderRadius: `${Number.parseFloat(rootStyles.getPropertyValue('--radius')) * 16}px`,
      borderRadiusSmall: `${Number.parseFloat(rootStyles.getPropertyValue('--radius')) * 12}px`,
    },
    Button: {
      textColor: `rgb(${foregroundColor.join(',')})`,
    },
  }
}, {
  immediate: true,
})
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="settingsStore.currentColorScheme === 'dark' ? darkTheme : undefined" :theme-overrides="themeOverrides" style="height: 100%;">
    <NMessageProvider>
      <slot />
      <NGlobalStyle />
    </NMessageProvider>
  </NConfigProvider>
</template>
