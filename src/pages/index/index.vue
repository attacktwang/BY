<template>
  <view class="page-index">
    <view class="header flex flex-ai-ctr flex-jc-sbt">
      <view class="left flex flex-jc-sbt">
        <image class="logo" src="../../assets/logo.png" />
        <view class="txt">
          <view class="name">北京语言大学</view>
          <view class="pro">校友档案移动管理系统</view>
        </view>
      </view>
      <view class="right">
        <image src="../../assets/bg1.png" />
      </view>
    </view>
    <view class="tabs flex flex-ai-ctr flex-jc-sbt">
      <view class="tab-item">
        <view>66699</view>
        <view>校友总数</view>
      </view>
      <view class="tab-item">
        <view>按学院</view>
        <view>查看</view>
      </view>
      <view class="tab-item">
        <view>按国家与城市</view>
        <view>查看</view>
      </view>
    </view>
    <view class="work-wrapper">
      <nut-grid gutter="16" column-num="2" direction="horizontal" :center="false">
        <nut-grid-item
          icon-size="20"
          icon="../../assets/xiaoyou.png"
          text="校友数据管理"
        ></nut-grid-item>
        <nut-grid-item
          icon-size="20"
          icon="../../assets/teaching-staff.png"
          text="职工数据管理"
        ></nut-grid-item>
        <nut-grid-item
          icon-size="20"
          icon="../../assets/tongxunlu.png"
          text="我的通讯录"
        ></nut-grid-item>
        <nut-grid-item
          icon-size="20"
          icon="../../assets/pachong.png"
          text="爬虫信息管理"
        ></nut-grid-item>
      </nut-grid>
    </view>
  </view>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import './index.less'
</script>
