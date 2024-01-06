/*
 * @FilePath: index.ts
 * @Author: wanghng
 * @Date: 2023-03-02 23:16:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-03 10:11:01
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:  
 */
import axios from "axios";  
import { ElMessage } from "element-plus";

// 定义枚举查询
enum MSG {
    "操作成功" = 200,
    "密码错误",
    "账号错误",
    "请求异常",
}
// 创建http实例
const baseURL = "https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api/";

const $http = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf8"
    }

})

// 请求拦截
$http.interceptors.request.use( (config) => {
    config.headers = config.headers || {};
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem("token") || '';
    }
    return config;
})
$http.interceptors.response.use((res) =>{
    const code: number = res.data.code;
    if(code !== 200){
        ElMessage.error(MSG[code]);
        return Promise.reject(res.data);
    }
    return res.data;
},err=>{
    console.log(err)
})


export default $http;