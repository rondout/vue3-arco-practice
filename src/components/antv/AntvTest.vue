<script lang="ts" setup>
import { Graph, Model } from '@antv/x6'

const elId = 'antv-test-container'

const data: Model.FromJSONData = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'hello' // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world' // String，节点标签
    },
    {
      id: 'node3', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 280, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world' // String，节点标签
    },
    {
      id: 'node4', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 380, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world' // String，节点标签
    }
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2' // String，必须，目标节点 id
    },
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node3' // String，必须，目标节点 id
    },
    {
      source: 'node1', // String,必须,起始节点 id
      target: 'node2' // String,必须,目标节点 id
    },
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node4' // String，必须，目标节点 id
    }
  ]
}

const initGraph = () => {
  const graph = new Graph({
    container: document.querySelector('#' + elId)
  })
  graph.fromJSON(data)

  // graph.getCellsBBox
}

onMounted(() => {
  initGraph()
})
</script>

<template>
  <h2>Antv Test</h2>
  <div :id="elId"></div>
</template>

<style lang="less" scoped>
#antv-test-container {
  width: 1000px;
  height: 600px;
}
</style>
