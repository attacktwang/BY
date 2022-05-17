<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.less'

const msg = ref('page Index')
</script>
