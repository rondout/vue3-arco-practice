<script lang="ts" setup>
import { HButton, deepClone } from 'tribiani-vue-tools'

const handleDeepClone = () => {
  deepClone({})
}
</script>

<template>
  <h2>arco-custom-components</h2>
  <HButton></HButton>
  <HButton @click="handleDeepClone">Deep Clone</HButton>
</template>

<style lang="less" scoped></style>
