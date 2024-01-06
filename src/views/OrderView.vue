<!--
 * @FilePath: OrderView.vue
 * @Author: wanghng
 * @Date: 2023-03-06 16:53:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-27 22:58:43
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
-->
<template>
    <div>
        <div class="select-item">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="标题">
                    <el-input v-model="selectData.title" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item label="详情">
                    <el-input v-model="selectData.body" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table border :data="list[selectData.page]" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="body" label="详情" />
        </el-table>
      <el-pagination @current-change="currentChange" background layout="prev, pager, next" :total="selectData.count"  />
    </div>
</template>

<script lang="ts">
import { defineComponent,onMounted, reactive, toRefs } from 'vue'
import { initData,ListInt } from '../types/order'
import {getList} from "@/http/api";

export default defineComponent({
    setup() {
        const data = reactive(new initData())
        onMounted(() => {
          getList({page:data.selectData.page}).then((res) => {
            console.log(res)
            data.selectData.count = res.data.length
            // data.list = res.data

            sliceList(res.data)
          })
        })

        // 前端进行分页
        const sliceList = (arr:ListInt[]) => {
          data.list = []
          for (let i = 0; i < arr.length; i+=10) {
            let list:any = arr.slice(i,i+10)
            data.list.push(list)
          }
          console.log(data.list)

        }
        const currentChange = (page:number) => {
          data.selectData.page = page-1
        }

        const onSubmit = () => {
          let arr = []
          arr = data.dataLsit
          if(data.selectData.title){
            arr = arr.filter(item => item.title.indexOf(data.selectData.title) != -1)
          }
          if(data.selectData.body){
            arr = arr.filter((item) => item.body.indexOf(data.selectData.body) != -1)
          }

          data.selectData.count = arr.length
          sliceList(arr)
        }
        return {
            ...toRefs(data),
          currentChange,
          onSubmit


        }
    }
})
</script>

<style></style>
