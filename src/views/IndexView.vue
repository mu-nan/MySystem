<!--
 * @FilePath: IndexView.vue
 * @Author: wanghng
 * @Date: 2023-03-03 14:52:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-08 15:31:18
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:  
-->
<template>
    <div>
        <el-container>
            <el-header height="80px ">
                <el-row :gutter="20">
                    <el-col :span="4" :offset="0"> <img class="header-logo" src="../assets/logo.png" alt=""
                            srcset=""></el-col>
                    <el-col :span="16" :offset="0">
                        <h2 class="header-title">后台管理</h2>
                    </el-col>
                    <el-col class="header-btn" :span="4" :offset="0">
                        <el-button type="text">munan</el-button>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                        default-active="2" text-color="#fff" router>
                        <el-menu-item v-for="item in list" :key="item.path" :index="item.path">
                            <el-icon><icon-menu /></el-icon>
                            <span>{{ item.meta.title }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const list = router.getRoutes().filter(res => res.meta.isShow);
        return {
            list
        }
    },
})
</script>
<style lang="scss" scoped>
.el-header {
    background: #545c64;

    .header-logo {
        width: 50px;
        height: 50px;
    }

    .header-title {
        text-align: center;
        color: #fff;
        height: 80px;
        line-height: 80px;
    }

    .header-btn {
        text-align: right;
        height: 80px;
        line-height: 80px;
    }
}

.el-aside {
    .el-menu {
        height: calc(100vh - 80px);
    }
}

.el-button--text {
    color: #fff;
}
</style>
