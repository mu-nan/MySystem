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
        <el-form-item label="姓名">
          <el-input v-model="selectData.nikeName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="selectData.role" placeholder="请选择">
            <el-option
                label="全部"
                :value="0"
            />
            <el-option
                v-for="item in roleList"
                :key="item.roleId"
                :label="item.roleName"
                :value="item.roleId"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table border :data="list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="nikeName" label="姓名" width="180" />
      <el-table-column prop="role" label="角色" >
        <template #default="scope">
          <span v-for="(item,index) in scope.row.role" :key="index">{{ item.roleName }}<span v-if="index != scope.row.role.length-1"> ,</span></span>
        </template>
      </el-table-column>
      <el-table-column prop="role" label="操作" >
        <template #default="scope">
          <el-button @click="editUser(scope.row)" type="danger" plain size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent,onMounted, reactive, toRefs } from 'vue'
import { initData,ListInt } from '../types/user'
import {getUserList,getRoleList} from "@/http/api";

export default defineComponent({
  setup() {
    const data = reactive(new initData())
    onMounted(() => {
      // 获取用户列表
      getUserList().then((res) => {
        data.allDataList = data.list = res.data

      })
      // 获取角色列表
      getRoleList().then((res) => {
        data.roleList = res.data
      })
    })


    const editUser = (item:ListInt[]) => {
      console.log(item)
    }


    const onSubmit = () => {
      let arr:ListInt[] = []
      arr = data.allDataList
      if(data.selectData.nikeName){
        arr = arr.filter((item) => item.nikeName.indexOf(data.selectData.nikeName) != -1)
      }
      if(data.selectData.role){
        arr = arr.filter((item) => item.role.find(item2 => item2.role === data.selectData.role))
      }

      data.list = arr
    }
    return {
      ...toRefs(data),
      onSubmit,
      editUser

    }
  }
})
</script>

<style></style>
