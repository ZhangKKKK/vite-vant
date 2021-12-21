<template>
  <van-config-provider :theme-vars="themeVars" style="height: 100%">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" message="woshi props" :transEvent="transEvent"/>
      </transition>
    </router-view>
    <!-- <transition name="fade" mode="out-in">
      <router-view />
    </transition> -->
    <my-menu />
    <!-- <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" name="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="/about">关于</van-tabbar-item>
    </van-tabbar> -->
  </van-config-provider>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Tabbar, TabbarItem, ConfigProvider } from 'vant';
import MyMenu from '../MyMenu.vue'
export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [ConfigProvider.name]: ConfigProvider,
    MyMenu
  },
  setup (props, content) {
    const router = useRouter()
    let active = ref('/')
    const onChange = (name: string) => router.push(name)
    const show = true
    // 全局主题色
    const configColor = {
      buttonColor: '#368100',
      pickerButtonColor: '#519214',
      primaryColor: '#519214'
    }
    const themeVars = {
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackgroundColor: configColor.buttonColor,
      // button
      buttonPrimaryBorderColor: configColor.buttonColor,
      buttonPrimaryBackgroundColor: configColor.buttonColor,
      // checkbox
      checkboxCheckedIconColor: configColor.primaryColor,
      checkboxSize: '16px',
      // picker
      pickerConfirmActionColor: configColor.buttonColor
    }
    return { active, onChange, show, themeVars }
  },
  created () {
    console.log(this)
  },
  methods: {
    transEvent (e: boolean) {
      console.log('父组件接受值：', e)
    }
  }
})
</script>
