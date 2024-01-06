/*
 * @FilePath: order.ts
 * @Author: wanghng
 * @Date: 2023-03-06 18:02:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-06 18:05:34
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
export interface ListInt {
    userId: number,
    id: number,
    title: string,
    body: string,

}

interface SelectDataInt {
    title: string,
    body: string,
    page: number,
    count: number,
}
export class initData {
    selectData: SelectDataInt = {
        title: "",
        body: "",
        page: 0,
        count: 0,
    };
    list: [ListInt][] = []
    dataLsit: ListInt[] = []
}
