<template>
  <div>
    layout
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    // 面包屑
    const { breadList } = handleBread()
    // 菜单
    const { selectedKeys, collapsed, menus, clickNav } = useMenu()
    console.log(menus)
    return {
      breadList,
      selectedKeys,
      collapsed,
      menus,
      clickNav
    }
  },
  created () {
    console.log(this.$route.matched)
  }
})
</script>
