/*
 * @Author: wanghng 419772562@qq.com
 * @Date: 2023-03-02 10:49:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-02 14:57:21
 * @FilePath: main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
