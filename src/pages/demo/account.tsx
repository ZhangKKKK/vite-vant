import { defineComponent, reactive, ref } from 'vue'
import { Button, Form, Field } from 'vant';

export default defineComponent({
  props: {
    message: {
      type: String,
      default: ''
    },
    transEvent: {
      type: Function,
      required: true,
      defatule: () => {}
    }
  },
  // 组合式api 语法
  setup (props) {
    console.log(props)
    let bool = ref(true)
    const onSubmit = (e: MouseEvent) => {
      console.log(e)
      bool.value = !bool.value
      console.log('click 向父组件传值', bool.value)
      props.transEvent(bool.value)

      console.log(form)
    }
    const form = reactive({
      username: ''
    })
    return { onSubmit, bool, form }
  },
  // options APi 语法
  // data () {
  //   return {
  //     bool: false,
  //     form: {
  //       username: ''
  //     }
  //   }
  // },
  // methods: {
  //   onSubmit (form: any) {
  //     console.log(form)
  //   }
  // },
  render () {
    console.log(this.message)
    return (
      <Form onSubmit={this.onSubmit}>
        <Field
          label="中文名"
          name="username"
          autocomplete='off'
          inputAlign='right'>
        </Field>
        <Button block type="primary" nativeType='submit'>
          提交{this.message}{this.bool + ''}
        </Button>
      </Form>
    )
  }
})
