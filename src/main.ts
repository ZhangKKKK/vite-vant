// import 'default-passive-events'
import 'virtual:svg-icons-register'
import 'amfe-flexible' 
import './assets/style/index.less'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './router/permission'

import './mock'

console.log(import.meta.env)



const app = createApp(App)
app.config.globalProperties.$message = 'hi'
console.log(app)
app.use(store)
app.use(router)
app.mount('#app')
