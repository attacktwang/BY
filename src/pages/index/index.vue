<template>
  <view class="page-contaienr page-index">
    <view class="header flex flex-ai-ctr flex-jc-sbt">
      <view class="left flex flex-jc-sbt">
        <image class="logo" src="@/assets/img/logo.png" />
        <view class="txt">
          <view class="name">北京语言大学</view>
          <view class="pro">校友档案移动管理系统</view>
        </view>
      </view>
      <view class="right">
        <image src="@/assets/img/bg1.png" />
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
    <view class="block-wrapper">
      <view class="title">工作台</view>
      <nut-grid gutter="20" column-num="2" direction="horizontal" :center="false">
        <nut-grid-item
          icon-size="20"
          :icon="require('@/assets/img/xiaoyou.png')"
          text="校友数据管理"
        ></nut-grid-item>
        <nut-grid-item
          icon-size="20"
          :icon="require('@/assets/img/teaching-staff.png')"
          text="职工数据管理"
        ></nut-grid-item>
        <nut-grid-item
          icon-size="20"
          :icon="require('@/assets/img/tongxunlu.png')"
          text="我的通讯录"
        ></nut-grid-item>
        <nut-grid-item
          icon-size="20"
          :icon="require('@/assets/img/pachong.png')"
          text="爬虫信息管理"
        ></nut-grid-item>
      </nut-grid>
    </view>
    <view class="block-wrapper">
      <view class="title">校友地域分布</view>
      <view class="main-content">
        <view class="tabs-wrapper flex">
          <nut-button :class="btnType === 1 ? 'active' : ''" @click="changeType(1)" shape="square"
            >中国地图</nut-button
          >
          <nut-button :class="btnType === 2 ? 'active' : ''" @click="changeType(2)" shape="square"
            >世界地图</nut-button
          >
        </view>
      </view>
    </view>
    <view class="block-wrapper">
      <view class="title">各学院校友总数</view>
      <view class="main-content">
        <view class="cell">
          <view class="label">外国语学院</view>
          <nut-progress percentage="30" strokeColor="#FF7878" stroke-width="6" />
        </view>
        <view class="cell">
          <view class="label">机电学院</view>
          <nut-progress percentage="10" strokeColor="#6AAFFD" stroke-width="6" />
        </view>
        <view class="cell">
          <view class="label">土木工程学院</view>
          <nut-progress percentage="15" strokeColor="#FFDE21" stroke-width="6" />
        </view>
        <view class="cell">
          <view class="label">珠宝设计学院</view>
          <nut-progress percentage="20" strokeColor="#6E56FB" stroke-width="6" />
        </view>
        <view class="cell">
          <view class="label">计算机学院</view>
          <nut-progress percentage="25" strokeColor="#F9BD5C" stroke-width="6" />
        </view>
      </view>
    </view>
    <view class="block-wrapper">
      <view class="title">校友年龄性别分布</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import './index.scss'

const btnType = ref<Number>(1)
const changeType = (type: number) => {
  btnType.value = type
}
</script>
