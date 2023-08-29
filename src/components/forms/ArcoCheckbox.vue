<template>
  <h3>Basic Usage</h3>
  <a-checkbox value="1">option 1</a-checkbox>
  <div>
    <p>Checked: {{ state.checked }}</p>
    <a-checkbox :disabled="state.disabled" v-model:model-value="state.checked">
      v-model
    </a-checkbox>
    <p>Disabled: {{ state.disabled }}</p>
    <a-checkbox v-model:model-value="state.disabled"> v-model </a-checkbox>
  </div>
  <h3 mt-2 mb-2>Checkbox Group</h3>
  <div mb-2>
    <a-space>
      <a-tag
        color="gold"
        v-for="item of state.groupValue"
        :key="item"
        closable
        :visible="state.groupValue.includes(item)"
        @close="() => handleCloseTag(item)"
        >{{ item }}</a-tag
      >
    </a-space>
  </div>
  <a-checkbox-group v-model:model-value="state.groupValue">
    <a-checkbox v-for="item of checkboxOptions" :key="item.value" :value="item.value">{{
      item.label
    }}</a-checkbox>
  </a-checkbox-group>
</template>

<script lang="ts" setup>
const state = reactive({
  checked: true,
  disabled: false,
  groupValue: [] as string[]
})

const checkboxOptions = [
  {
    label: 'Steph Curry',
    value: 'steph-curry'
  },
  {
    label: 'Klay Thompson',
    value: 'klay-thompson'
  },
  {
    label: 'Daymond Green',
    value: 'draymond-green'
  },
  {
    label: 'Andrew Wiggins',
    value: 'andrew-wiggins'
  }
]

const handleCloseTag = (item: string) => {
  state.groupValue.splice(
    state.groupValue.findIndex((value) => value === item),
    1
  )
}
</script>

<style lang="less" scoped></style>
