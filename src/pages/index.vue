<template>
  <div class="font">home</div>
  <van-action-bar-button type="danger">
    立即购买
  </van-action-bar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ActionBarButton } from 'vant'
export default defineComponent({
  components: {
    [ActionBarButton.name]: ActionBarButton
  },
  setup() {
    
  }
})
</script>
<style lang="less" scoped>
.font {
  font-size: 24px;
}
</style>
