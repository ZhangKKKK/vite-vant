<template>
  <div class="bg">
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="form.username"
          name="username"
          label="中文名"
          autocomplete="off"
          input-align="right"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="password"
          autocomplete="off"
          input-align="right"
          label="密码"
        />
        <van-field
          v-model="form.sexText"
          is-link
          readonly
          name="sex"
          label="性别"
          placeholder="请选择"
          input-align="right"
          @click="showPicker = true"
        />
      </van-cell-group>
      <van-cell-group title="最近一份工作">
        <van-field
          v-model="form.money"
          name="money"
          label="薪资"
          autocomplete="off"
          input-align="right"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-checkbox v-model="isRead" shape="square" icon-size="16px">
          <div class="i-agree">
            我同意
            <a>Kandfing 政策</a>
          </div>
        </van-checkbox>
      </div>
      <div>
        <van-button block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { Form, Field, CellGroup, Button, Popup, Picker, Checkbox } from 'vant';
import usePub from '@/util/public-use'
interface IColumn {
  value: number,
  text: string
}
export default defineComponent({
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox
  },
  setup() {
    interface Iform {
      password: string,
      username: string,
      sex: number | undefined,
      sexText: string | undefined,
      money: number | undefined
    }
    const { removeRept } = usePub()
    console.log(removeRept([{ key: '1', name: 2 }, { key: '1', name: 1 }], 'key'))
    // console.log(towArrayToOne([1,[1,2]]))
    const form: Iform = reactive({
      password: '',
      username: '',
      sexText: '',
      sex: undefined,
      money: undefined
    })
    const isRead = ref(false)
    const onSubmit = (e: any) => {
      console.log(isRead)
      console.log(e)
    }

    const columns: IColumn[] = [{ value: 1, text: '男' }, { value: 2, text: '女' }]
    const showPicker = ref(false)
    const onConfirm = (row: IColumn) => {
      console.log(row.value)
      showPicker.value = false
      form.sex = row.value
      form.sexText = row.text
    }
    return { form, isRead, onSubmit, columns, showPicker, onConfirm }
  },
})
</script>
<style lang="less" scoped>
@import '@/assets/style/them.less';
.bg {
  background: @bgColor;
}
.i-agree {
  font-size: 12px;
  color: #666;
  a {
    color: @themColor;
    margin-left: 6px;
  }
}
</style>