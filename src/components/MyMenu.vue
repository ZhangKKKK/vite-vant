<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false">
    <div v-if="expand" id="menu">
      <div class="top" @click="jumpPage('/')">
        <van-image width="0.44rem" height="0.44rem" fit="contain" :src="getAssetsFile('images/menus/Frame@2x.png')" />
        <p>职位</p>
      </div>
      <div class="left" @click="jumpPage('/account')">
        <van-image width="0.44rem" height="0.44rem" fit="contain" :src="getAssetsFile('images/menus/Frame@2x(2).png')" />
        <p>公司</p>
      </div>
      <div class="bottom" @click="jumpPage('/edit-resume')">
        <van-image width="0.44rem" height="0.44rem" fit="contain" :src="getAssetsFile('images/menus/Frame@2x(1).png')" />
        <p>简历</p>
      </div>
      <div class="right" @click="jumpPage('/list')">
        <van-image width="0.44rem" height="0.44rem" fit="contain" :src="getAssetsFile('images/menus/Frame@2x(3).png')" />
        <p>我的</p>
      </div>
      <div class="group" @click="expand = false">
        <van-image width="0.44rem" height="0.44rem" fit="contain" :src="getAssetsFile('images/menus/Group@2x.png')" />
      </div>
    </div>
    <div v-else id="small-menu" @click="expand = true">
      <van-image width="0.32rem" height="0.26rem" fit="contain" :src="getAssetsFile('images/menus/Group1@2x.png')" />
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Image } from 'vant';
import { useRouter } from 'vue-router'
import usePub from '@/util/public-use'
import SvgIcon from '@/components/SvgIcon.vue'
export default defineComponent({
  components: {
    [Image.name]: Image,
    SvgIcon
  },
  setup() {
    const Pub = usePub()
    const getAssetsFile = Pub.getAssetsFile
    console.log(getAssetsFile)
    const router = useRouter()
    const expand = ref(false)
    const jumpPage = (url: string = '/') => {
      expand.value = false
      router.push(url)
    }
    const beforeEnter = (el: any) => {
      console.log('进入前', el.id)
      if (el.id === 'menu') {
        el.style.transform = 'scale(.2)'
      } else {
        el.style.right = '113px'
        el.style.bottom = '121px'
      }
      el.style.display = 'none'
    }
    const enter = (el: any, done: any) => {
      setTimeout(() => {
        if (el.id === 'menu') {
          el.style.display = 'block'
        } else {
          el.style.display = 'flex'
        }
        setTimeout(() => {
          if (el.id === 'menu') {
          el.style.transform = 'scale(1)'
        } else {
          el.style.right = '17px'
          el.style.bottom = '31px'
        }
        }, 16)
        setTimeout(done, 300);
      }, 300)
    }
    const leave = (el: any, done: any) => {
      if (el.id === 'small-menu') {
        el.style.right = '113px'
        el.style.bottom = '121px'
      } else {
        el.style.transform = 'scale(.2)'
      }
      setTimeout(done, 300)
    }
    return { expand, jumpPage, beforeEnter, enter, leave, getAssetsFile }
  }
})
</script>

<style lang="less" scoped>
#small-menu {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 17px;
  bottom: 31px;
  // right: 113px;
  // bottom: 121px;
  background: rgba(18, 86, 45, 0.7);
  border: 2px solid rgba(177,  179, 175, 0.6);
  border-radius: 50%;
  transition: all .3s;
  z-index: 9;
}
#menu {
  position: fixed;
  transform: scale(.2);
  bottom: 35px;
  right: 25px;
  width: 200px;
  height: 200px;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.8);
  transition: all .3s;
  z-index: 10;
}
.group {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.7);
  border: 3px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  img {
    width: 22px;
  }
}
.top, .left, .right, .bottom {
  height: 40px;
  width: 40px;
  text-align: center;
  position: absolute;
  font-size: 12px;
  color: #fff;
}
p {
  margin: 0;
}
.top {
  top: 20px;
  left: 50%;
  margin-left: -20px;
}
.left {
  top: 50%;
  left: 20px;
  margin-top: -25px;
}
.right {
  top: 50%;
  right: 20px;
  margin-top: -25px;
}
.bottom {
  bottom: 20px;
  left: 50%;
  margin-left: -20px;
}
</style>