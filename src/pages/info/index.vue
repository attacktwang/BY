<template>
  <view class="page-container page-info">
    <nut-tabs v-model="tabValue">
      <nut-tabpane title="校友数据管理">
        <view class="search-wrapper">
          <nut-searchbar v-model="keyWords" placeholder="姓名、手机号、学号、身份证">
            <template v-slot:leftin>
              <nut-icon size="14" name="search2"></nut-icon>
            </template>
            <template v-slot:rightout>
              搜索
            </template>
          </nut-searchbar>
        </view>
        <view class="table">
          <!-- 左侧固定 -->
          <view class="table_left_column">
            <view class="left_col_item ov-hd">姓名</view>
            <nut-checkboxgroup v-model="groupList" @change="changeBox" ref="group">
              <view v-for="(item, index) in list" :key="index">
                <nut-checkbox :label="index + ''">{{ item.name }}</nut-checkbox>
              </view>
            </nut-checkboxgroup>
          </view>
          <!-- 右侧表格滚动 -->
          <view class="table_right_scroll_box">
            <view class="table_tr_item">
              <view class="tr_td">手机号</view>
              <view class="tr_td">学院</view>
              <view class="tr_td">专业</view>
              <view class="tr_td">性别</view>
              <view class="tr_td">操作</view>
            </view>
            <view v-for="(item, index) in list" :key="index">
              <view class="table_tr_item">
                <view class="tr_td">{{ item.phone }}</view>
                <view class="tr_td">{{ item.college }}</view>
                <view class="tr_td">{{ item.major }}</view>
                <view class="tr_td">{{ item.gender }}</view>
                <view class="tr_td"></view>
              </view>
            </view>
          </view>
        </view>
        <!-- 底部操作按钮 -->
        <view class="bottom-wrapper flex flex-jc-sbt flex-ai-ctr">
          <nut-checkbox v-model="selecAll" @change="handleSelectAll">全选</nut-checkbox>
          <nut-button class="btn-add">新增</nut-button>
        </view>
      </nut-tabpane>
      <nut-tabpane title="职工数据管理">
        <view class="search-wrapper">
          <nut-searchbar v-model="keyWords" placeholder="姓名、手机号、工号、身份证">
            <template v-slot:leftin>
              <nut-icon size="14" name="search2"></nut-icon>
            </template>
            <template v-slot:rightout>
              搜索
            </template>
          </nut-searchbar>
        </view>
      </nut-tabpane>
    </nut-tabs>
  </view>
</template>

<script lang="ts" setup>
import './index.scss'
import { ref } from 'vue'
import tableData from './tableData'
const tabValue = ref<string>('0')
const keyWords = ref<string>('')
const list = ref(tableData)
const groupList = ref<Array<string>>(['1'])
const group = ref(null)
const selecAll = ref(false)

const handleSelectAll = (checked: boolean, label: string) => {
  console.log('change事件触发' + checked, label)
}
const changeBox = () => {}
</script>
