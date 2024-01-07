<template>
  <div>
    <!--    筛选条件-->
<!--    <div class="select-item">-->
<!--      <el-form :inline="true" :model="selectData" class="demo-form-inline">-->
<!--       -->
<!--        <el-form-item label="角色">-->
<!--          <el-select v-model="selectData.roleId" placeholder="请选择">-->
<!--            <el-option-->
<!--                label="全部"-->
<!--                :value="0"-->
<!--            />-->
<!--            <el-option-->
<!--                v-for="item in roleList"-->
<!--                :key="item.roleId"-->
<!--                :label="item.roleName"-->
<!--                :value="item.roleId"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="onSubmit">查询</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </div>-->
    <el-button type="primary" @click="addRole">添加角色</el-button>
    <!--    表格内容-->
    <el-table border :data="list" style="width: 100%">
      <el-table-column prop="roleId" label="ID" width="180"/>
      <el-table-column prop="roleName" label="姓名" width="180"/>
      <el-table-column prop="role" label="操作">
        <template #default="scope">
          <el-button @click="editUser(scope.row)" type="danger" plain size="small">修改权限</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--    弹框内容-->
    <el-dialog
        v-model="dialog.show"
        :title="dialog.title"
        width="30%"
    >
      <el-form :model="editItem">
        <el-form-item label="姓名" label-width="50px">
          <el-input v-model="editItem.nikeName" placeholder="请输入修改的姓名"/>
        </el-form-item>
        <el-form-item label="角色" label-width="50px">
          <el-select v-model="editItem.role" placeholder="请选择角色" multiple>
            <el-option
                label="全部"
                :value="0"
            />
            <el-option
                v-for="item in allDataList"
                :key="item.roleId"
                :label="item.roleName"
                :value="item.roleId"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
<!--        <el-button @click="cancelEdit">取消</el-button>-->
<!--        <el-button type="primary" @click="confirmEdit">-->
<!--          确认-->
<!--        </el-button>-->
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue'
import {getRoleList} from "@/http/api";
import {initData,ListInt} from "@/types/role";
import {ElMessage, ElMessageBox} from "element-plus";

export default defineComponent({
  setup() {
    const data = reactive(new initData())
    onMounted(() => {
      getRoleList().then(res => {
        console.log(res)
        data.allDataList = data.list = res.data
      })
    })
    const editUser = (row:ListInt) => {
      console.log(row)
    }
    const addRole = () => {
      ElMessageBox.prompt('请输入添加角色名称', '添加角色', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputPattern:
            /\S/,
        inputErrorMessage: '名称不能为空',
      })
          .then(({ value }) => {
            if(value){
              data.list.unshift({
                roleId:data.list.length+1,
                roleName:value,
                authority:[]
              })
            }
            ElMessage({
              type: 'success',
              message: `添加${value}角色成功`,
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '取消添加',
            })
          })
    }
    return {
      ...toRefs(data),
      editUser,
      addRole
    }
  }
})
</script>

<style scoped>

</style>