<template>
  <h3>Basic Switch Usage</h3>
  <a-switch v-model="state.checked"></a-switch>
  <h3 my-2>Different Shapes</h3>
  <a-switch mr-3 v-model="state.checked" type="round"></a-switch>
  <a-switch v-model="state.checked" type="line"></a-switch>
  <h3>Custom Text</h3>
  <a-switch mr-3 v-model="state.checked">
    <template #checked>ON</template>
    <template #unchecked>OFF</template>
  </a-switch>
  <a-switch v-model="state.checked">
    <template #checked>CHECKED</template>
    <template #unchecked>UN_CHECKED</template>
  </a-switch>
</template>

<script lang="ts" setup>
const state = reactive({
  checked: true
})
</script>

<style lang="less" scoped></style>
