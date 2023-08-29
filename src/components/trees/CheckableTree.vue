<template>
  <div v-if="state.checkedKeys.length > 0">
    <a-tag
      color="green"
      closable
      mr-1
      v-for="key of state.checkedKeys"
      @close="() => handleDeleteKey(key)"
      visible
      :key="key"
      >{{ key }}</a-tag
    >
  </div>
  <a-tree
    :data="treeData"
    :selected-keys="[]"
    checkable
    v-model:checked-keys="state.checkedKeys"
  ></a-tree>
</template>

<script lang="ts" setup>
import { TreeNodeData } from '@arco-design/web-vue'

const state = reactive({
  checkedKeys: [] as string[]
})

const handleDeleteKey = (key: string) => {
  state.checkedKeys = state.checkedKeys.filter((item) => item !== key)
}

const treeData: TreeNodeData[] = [
  {
    title: 'Golden State Warriors',
    key: 'gsw',
    children: [
      {
        title: 'Steph Curry',
        key: 'steph-curry'
      },
      {
        title: 'Klay Thompson',
        key: 'klay-thompson',
        disableCheckbox: true
      },
      {
        title: 'Daymond Green',
        key: 'draymond-green'
      },
      {
        title: 'Andrew Wiggins',
        key: 'andrew-wiggins'
      }
    ]
  },
  {
    title: 'Boston Celtics',
    key: 'bos',
    children: [
      {
        title: 'Start Lineups',
        key: 'start',
        children: [
          {
            title: 'Kevin Garnett',
            key: 'kg'
          },
          {
            title: 'Paul Pierce',
            key: 'the-truth'
          },
          {
            title: 'Ray Allen',
            key: 'ray-allen'
          }
        ]
      },
      {
        title: 'Bench Lineups',
        key: 'bench',
        children: [
          { title: 'Glen Davis', key: 'big-baby' },
          { title: 'Nate Robinson', key: 'nate-ronbinson' }
        ]
      }
    ]
  }
]
</script>

<style lang="less" scoped></style>
