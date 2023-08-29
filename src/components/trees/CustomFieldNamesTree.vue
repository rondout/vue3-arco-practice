<template>
  <h2>Dynamic Data Fetch Tree</h2>
  <a-tree :data="state.displayedNodes" :load-more="handleLoadmore" :field-names="fieldNames">
    <template #icon>
      <icon-star />
    </template>
  </a-tree>
</template>

<script lang="ts" setup>
import { IconStar, IconAlignCenter } from '@arco-design/web-vue/es/icon'
import { TreeNodeData, TreeFieldNames } from '@arco-design/web-vue'

declare module '@arco-design/web-vue' {
  interface TreeNodeData {
    id?: string
    name?: string
  }
}

const fieldNames: TreeFieldNames = {
  key: 'id',
  title: 'name'
}
const state = reactive({
  displayedNodes: [
    { name: 'Golden State Warriors', id: 'gsw', icon:() => h(IconAlignCenter) },
    {
      name: 'Boston Celtics',
      id: 'bos'
    }
  ] as TreeNodeData[]
})

const treeData: TreeNodeData[] = [
  {
    name: 'Golden State Warriors',
    id: 'gsw',
    children: [
      {
        name: 'Steph Curry',
        id: 'steph-curry'
      },
      {
        name: 'Klay Thompson',
        id: 'klay-thompson'
      },
      {
        name: 'Daymond Green',
        id: 'draymond-green'
      },
      {
        name: 'Andrew Wiggins',
        id: 'andrew-wiggins'
      }
    ]
  },
  {
    name: 'Boston Celtics',
    id: 'bos',
    children: [
      {
        name: 'Start Lineups',
        id: 'start',
        children: [
          {
            name: 'Kevin Garnett',
            id: 'kg',
            children: [
              { name: '2.11m', id: 'kg-height' },
              { name: 'black', id: 'kg-skin' }
            ]
          },
          {
            name: 'Paul Pierce',
            id: 'the-truth'
          },
          {
            name: 'Ray Allen',
            id: 'ray-allen'
          }
        ]
      },
      {
        name: 'Bench Lineups',
        id: 'bench',
        children: [
          { name: 'Glen Davis', id: 'big-baby' },
          { name: 'Nate Robinson', id: 'nate-ronbinson' }
        ]
      }
    ]
  }
]

const getChildrenByNode = (node: TreeNodeData) => {
  let foundNodes: TreeNodeData[] = null
  function findNodeChildren(sourceNodes: TreeNodeData[]) {
    for (let item of sourceNodes) {
      if (item.id === node.id) {
        foundNodes = item.children?.map(({ id, name }) => ({ id, name }))
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
