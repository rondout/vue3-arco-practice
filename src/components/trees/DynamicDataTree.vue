<template>
  <h2>Dynamic Data Fetch Tree</h2>
  <a-tree :data="state.displayedNodes" :load-more="handleLoadmore">
    <template #icon>
      <icon-star />
    </template>
  </a-tree>
</template>

<script lang="ts" setup>
import { TreeNodeData } from '@arco-design/web-vue'
import {IconStar} from "@arco-design/web-vue/es/icon"

const state = reactive({
  displayedNodes: [
    { title: 'Golden State Warriors', key: 'gsw' },
    {
      title: 'Boston Celtics',
      key: 'bos'
    }
  ] as TreeNodeData[]
})

watchEffect(() => {
  console.log(state.displayedNodes)
}, {})

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
            key: 'kg',
            children: [
              { title: '2.11m', key: 'kg-height' },
              { title: 'black', key: 'kg-skin' }
            ]
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

const getChildrenByNode = (node: TreeNodeData) => {
  let foundNodes: TreeNodeData[] = null
  function findNodeChildren(sourceNodes: TreeNodeData[]) {
    for (let item of sourceNodes) {
      if (item.key === node.key) {
        foundNodes = item.children?.map(({ key, title, children }) => ({ key, title, isLeaf: !children?.length }))
        break
      } else if (item.children) {
        findNodeChildren(item.children)
      }
    }
  }
  findNodeChildren(treeData)
  return foundNodes
}

const handleLoadmore = (node: TreeNodeData) => {
  return new Promise<void>((r) => {
    const children = getChildrenByNode(node)
    if (!children) {
      node.isLeaf = true
    }
    node.children = children
    setTimeout(() => {
      console.log(state.displayedNodes)
      r()
    }, 1000)
  })
}
</script>

<style lang="less" scoped></style>
