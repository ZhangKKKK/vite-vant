import 'default-passive-events'
import 'amfe-flexible' 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


const app = createApp(App)
app.config.globalProperties.$message = 'hi'
console.log(app)
app.use(store)
app.use(router)
app.mount('#app')
