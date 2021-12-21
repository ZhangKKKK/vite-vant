// import { ref } from 'vue'

export default function usePub () {
  /**
   * 数组对象去重
  */
  const removeRept = (arr: any[], key: string) => {
    const obj: any = {}
    const resultArr = arr.reduce(function (item: any, next: any) {
      if (!obj[next[key]]) {
        obj[next[key]] = true
        item.push(next)
      }
      return item
    }, [])
    return resultArr
  }
  /**
   * 二维数组转一维
  */
 const towArrayToOne = (arr: any[]) => {
  arr.reduce((a, b) => { return a.concat(b) })
 }

  // 获取assets静态资源
  const getAssetsFile = (url: string) => {
    return new URL(`../assets/${url}`, import.meta.url).href
  }
  return {
    removeRept,
    towArrayToOne,
    getAssetsFile
  }
}
