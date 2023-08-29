<template>
  <h3>Basic Select Usage</h3>
  <a-select :style="{ width: '320px' }" placeholder="Please select ...">
    <a-option>Beijing</a-option>
    <a-option>Shanghai</a-option>
    <a-option>Guangzhou</a-option>
    <a-option disabled>Disabled</a-option>
  </a-select>
  <h3 mt-2>Multiple Seelction</h3>
  <div mb-2>
    <a-tag
      visible
      mr-1
      color="red"
      closable
      v-for="item of state.selectedItems"
      :key="item"
      @close="() => handleCloseTag(item)"
      >{{ item }}</a-tag
    >
  </div>
  <a-select
    multiple
    :style="{ width: '320px' }"
    v-model="state.selectedItems"
    placeholder="Please select ..."
  >
    <a-option>Beijing</a-option>
    <a-option>Shanghai</a-option>
    <a-option>Guangzhou</a-option>
    <a-option disabled>Disabled</a-option>
  </a-select>
  <h3 mt-2>Allow Clear</h3>

  <a-select
    multiple
    :style="{ width: '320px' }"
    v-model="state.selectedItems"
    placeholder="Please select ..."
    allow-clear
  >
    <a-option>Beijing</a-option>
    <a-option>Shanghai</a-option>
    <a-option>Guangzhou</a-option>
    <a-option disabled>Disabled</a-option>
  </a-select>
</template>

<script lang="ts" setup>
const state = reactive({ selectedItems: [] as string[] })

const handleCloseTag = (item: string) => {
  const index = state.selectedItems.findIndex((v) => v === item)
  state.selectedItems.splice(index, 1)
}
</script>

<style lang="less" scoped></style>
