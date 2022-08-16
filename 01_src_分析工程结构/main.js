import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象 与vm类似 比vm轻量
const app = createApp(App)

//挂载
app.mount('#app')

//卸载
// setTimeout(()=>{
//     app.unmount('#app')
// },1000)

/* const vm = new Vue({
    render:h => h(App)
})
vm.$mount('#app') */


// createApp(App).mount('#app')
