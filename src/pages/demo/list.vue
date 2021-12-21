<template>
  <div>
    <div style="height: 200px"></div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="80"
      >
        <van-cell v-for="(item, index) in dataList" :key="index" :title="item.name + (index + 1)" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script lang="ts">
import wx from 'weixin-js-sdk'
import { getHomeListApi } from '@/api/index'
console.log(wx)
// wx.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: 'wxf77219cfb7b7d4c5', // 必填，公众号的唯一标识
//   timestamp: '', // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '',// 必填，签名
//   jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表
// })
// wx.ready(function(res: any){
//   console.log(res)
//   // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
//   wx.checkJsApi({
//     jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
//     success: function(res: any) {
//       console.log(res)
//     },
//     fail: (err: any) => {
//       console.log(err)
//     }
//   })
// });
// wx.error(function(res: any){
//   console.log(res)
//   // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
// });
import { defineComponent, ref, Ref } from 'vue'
import { PullRefresh, List, Cell, Toast } from 'vant'
import { IHomeList, IResp } from '@/interface/api'
export default defineComponent({
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Cell.name]: Cell
  },
  setup() {
    const dataList: Ref<IHomeList[]> = ref([])
    const refreshing = ref(false)
    const finished = ref(false)
    const loading = ref(false)
    const onRefresh = () => {
      refreshing.value = true
      finished.value = false
      onLoad()
    }
    const onLoad = () => {
      loading.value = true
      if (refreshing.value) {
        dataList.value = []
        refreshing.value = false
      }
      getHomeListApi({}).then((res: any) => {
        console.log(res)
        loading.value = false
        if (res.code === 0) {
          dataList.value = dataList.value.concat(res.data)
          if (dataList.value.length >= 50) {
            finished.value = true
          }
        } else {
          Toast(res.message)
        }
      }).catch(err => {
        console.error(err)
      })
    }

    return {
      loading,
      refreshing,
      finished,
      onRefresh,
      onLoad,
      dataList
    }
  }
})
</script>
<style lang="less" scoped>
.font {
  font-size: 24px;
}
</style>
