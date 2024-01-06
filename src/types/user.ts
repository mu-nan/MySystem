/*
 * @FilePath: user.ts
 * @Author: wanghng
 * @Date: 2023-03-06 18:02:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-06 18:05:34
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export interface ListInt {
    id: number,
    nikeName: string,
    userName: string,
    role:RoleInt[],

}

interface RoleInt {
    role: number,
    roleName: string,
}

interface SelectDataInt {
    nikeName:string,
    role:0,
}
interface roleListInt {
    roleName: string,
    roleId: number,
    suthorty: number[],
}
export class initData {
    selectData: SelectDataInt = {
        nikeName: '',
        role:0,
    };
    list: ListInt[] = []

    allDataList: ListInt[] = []
    roleList:roleListInt[] = []
}
