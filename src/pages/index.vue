<template>
  <div class="bg van-safe-area-bottom">
    <header></header>
    <nav class="nav">
      <div class="nav-item" v-for="(item, index) in list" :key="item.id">
        <van-icon :name="item.icon" class="nav-img" />
        <span class="nav-text">{{ item.name }}</span>
        <van-icon name="arrow-down" />
        <div v-if="index < list.length - 1" class="nav-line"></div>
      </div>
    </nav>
    <div class="title">
      共1200个职位
      <van-button class="title-btn" type="primary" size="mini" color="#519214">
        转发
        <van-icon name="share-o" />
      </van-button>
    </div>
    <div class="list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :offset="80"
        >
          <van-checkbox-group v-model="checkedArr">
            <div class="list-item" v-for="(item, index) in dataList" :key="item.id">
              <div class="list-item-title van-ellipsis">
                {{ item.title }}
                <van-icon class="list-item-title-icon" :name="getAssetsFile('images/home-icon(5).png')" size="0.4rem"/>
              </div>
              <div class="list-item-row">
                <div>
                  <van-icon :name="getAssetsFile('images/home-icon(4).png')" />
                  <span>{{ item.city }}</span>
                </div>
                <div>
                  <van-icon :name="getAssetsFile('images/home-icon(1).png')" />
                  <span>{{ item.date }}</span>
                </div>
              </div>
              <div class="list-item-row">
                <div>
                  <van-icon :name="getAssetsFile('images/home-icon(2).png')" />
                  <span>{{ item.name }}</span>
                </div>
                <div>
                  <van-icon :name="getAssetsFile('images/home-icon(3).png')" />
                  <span>{{ item.mobile }}</span>
                </div>
              </div>
              <van-checkbox class="checkbox" shape="square" :name="item.name"></van-checkbox>
            </div>
          </van-checkbox-group>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { Icon, Button, PullRefresh, List, Toast, Checkbox, CheckboxGroup } from 'vant'
import { IHomeList } from '@/interface/api'
import { getHomeListApi } from '@/api/index'
import usePub from '@/util/public-use'
export default defineComponent({
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [PullRefresh.name]: PullRefresh,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [List.name]: List
  },
  setup() {
    const Pub = usePub()
    const list = [
      { name: '行业', id: 1, icon: Pub.getAssetsFile('images/Group@2x(1).png') },
      { name: '职能', id: 1, icon: Pub.getAssetsFile('images/Group@2x(4).png') },
      { name: '城市', id: 1, icon: Pub.getAssetsFile('images/Group@2x(2).png') },
      { name: '搜索', id: 1, icon: Pub.getAssetsFile('images/Group@2x(3).png') }
    ]

    const dataList: Ref<IHomeList[]> = ref([])
    const checkedArr = ref([])
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
      list,
      loading,
      refreshing,
      finished,
      onRefresh,
      onLoad,
      dataList,
      checkedArr,
      getAssetsFile: Pub.getAssetsFile
    }
  },
})
</script>

<style lang="less" scoped>
@import '@/assets/style/them.less';
.bg {
  height: 100%;
}
header {
  width: 100%;
  height: 200px;
  background: url('@/assets/images/Frame@3x.png');
  background-size: cover;
}
.nav {
  width: 355px;
  height: 42px;
  margin: 0 auto;
  margin-top: -21px;
  background: @themColor;
  border-radius: 4px;
  &-item {
    float: left;
    width: 25%;
    line-height: 42px;
    text-align: center;
    position: relative;
    color: #fff;
  }
  &-text {
    margin: 0 2px;
  }
  &-img {
    vertical-align: middle;
  }
  &-line {
    height: 12px;
    width: 1px;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: scaleX(.5);
    margin-top: -6px;
  }
}

.title {
  color: @sixColor;
  margin: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // &-btn {
  //   float: right;
  // }
}

.list {
  width: 355px;
  height: auto;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  &-item {
    padding: 10px;
    box-sizing: border-box;
    padding-left: 35px;
    position: relative;
    .checkbox {
      position: absolute;
      top: 13px;
      left: 10px;
    }
    &-title {
      color: @sixColor;
      line-height: 24px;
      &-icon {
        position: absolute;
        top: 13px;
        right: 10px;
      }
    }
    &-row {
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          margin-left: 3px;
        }
      }
    }
  }
}
</style>