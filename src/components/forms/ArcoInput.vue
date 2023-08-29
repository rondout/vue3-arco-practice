<template>
  <h3>Basic Input</h3>
  <a-input v-model:model-value="state.value"></a-input>
  <h3>Allow Clear</h3>
  <a-input allow-clear v-model:model-value="state.value"></a-input>
  <h3>Error Status</h3>
  <a-input allow-clear error v-model:model-value="state.value"></a-input>
  <h3>Prepend And Append</h3>
  <a-space direction="vertical" size="large">
    <a-input :style="{ width: '320px' }" placeholder="Please enter something" allow-clear>
      <template #prepend> +86 </template>
    </a-input>
    <a-input :style="{ width: '320px' }" placeholder="Please enter something" allow-clear>
      <template #append> RMB </template>
    </a-input>
  </a-space>
  <h3>Arco Input Password</h3>
  <a-input-password v-model="state.password"></a-input-password>
  <h3>Arco Input Number</h3>
  <a-input-number v-model="state.age" :min="0" :max="150"></a-input-number>
  <a-input-number v-model="state.age" :min="0" :max="150" mode="button"></a-input-number>
  <h3>Arco Input Number with Procision and Setp settings</h3>
  <a-input-number
    v-model="state.weight"
    :precision="2"
    :step="0.23"
    :min="0"
    :max="150"
  ></a-input-number>
  <h3>Arco Input Number with Value Formatter and Parser</h3>
  <a-input-number
    v-model="state.age"
    :min="0"
    :max="150"
    :formatter="inputNumberFormatter"
    :parser="inputNumberParser"
  ></a-input-number>
</template>

<script lang="ts" setup>
const state = reactive({
  value: 'hanshufei',
  password: '',
  age: 0,
  weight: 0.1
})

const inputNumberFormatter = (value: number) => {
  console.log(value)
  return '￥' + value
}

const inputNumberParser = (value: string) => {
  console.log(value)
  return Number(value.replace(/￥/, ''))
}
</script>

<style lang="less" scoped></style>
