<template>
  <h2>Selected Keys</h2>
  <div v-if="state.selectedKeys.length > 0">
    <a-tag
      color="green"
      closable
      mr-1
      v-for="key of state.selectedKeys"
      @close="() => handleDeleteKey(key)"
      visible
      :key="key"
      >{{ key }}</a-tag
    >
  </div>
  <a-tree
    :data="treeData"
    @select="handleSelect"
    multiple
    v-model:selected-keys="state.selectedKeys"
  ></a-tree>
</template>

<script lang="ts" setup>
import { TreeNodeData, TreeInstance } from '@arco-design/web-vue'

const state = reactive({
  selectedKeys: [] as string[]
})

const handleDeleteKey = (key: string) => {
  state.selectedKeys = state.selectedKeys.filter((item) => item !== key)
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
        key: 'klay-thompson'
      },
      {
        title: 'Daymond Green',
        key: 'draymond-green',
        disabled:true
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

const handleSelect: TreeInstance['onSelect'] = (selectedKeys, data) => {
  console.log(selectedKeys, data)
}
</script>

<style lang="less" scoped></style>
