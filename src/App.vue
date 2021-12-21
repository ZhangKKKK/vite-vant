<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant';
export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup (props, content) {
    const router = useRouter()
    let active = ref('/')
    const onChange = (name: string) => router.push(name)
    const show = true
    return { active, onChange, show }
  }
})

</script>

<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view> -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

