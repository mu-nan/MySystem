/*
 * @FilePath: login.ts
 * @Author: wanghng
 * @Date: 2023-03-02 18:05:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-02 18:26:26
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:  
 */
import type { FormInstance } from "element-plus";
import {ref} from 'vue';
export interface loginFormInt {
    username: string;
    password: string;
    code:string;
}

export class initData {
    loginFromData: loginFormInt = {
        username: '',
        password: '',
        code: '',
    }
    loginFormRef = ref<FormInstance>()
}