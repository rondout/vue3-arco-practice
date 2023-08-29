<template>
  <h4>Basic Usage</h4>
  <a-space direction="vertical" size="large">
    <a-cascader :options="options" :style="{ width: '320px' }" placeholder="Please select ..." />
    <a-cascader
      :options="options"
      default-value="steph-curry"
      expand-trigger="hover"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
    />
    <h4>Allow Clear</h4>
    <a-cascader
      :options="options"
      default-value="steph-curry"
      expand-trigger="hover"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-clear
    />
    <h4>Format Label</h4>
    <a-cascader
      multiple
      :options="options"
      default-value="steph-curry"
      expand-trigger="hover"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-clear
      :format-label="labelFlrmatter"
    />
    <h4>Strict Mode Select</h4>
    <a-cascader
      check-strictly
      multiple
      :options="options"
      default-value="steph-curry"
      expand-trigger="hover"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-clear
      :format-label="labelFlrmatter"
    />
    <h4>Async Lazy Load</h4>
    <a-cascader
      check-strictly
      multiple
      :options="state.displayedNodes"
      default-value="gsw"
      expand-trigger="hover"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-clear
      :format-label="labelFlrmatter"
      :load-more="handleLoadMore"
    />
  </a-space>
</template>

<script lang="ts" setup>
import { CascaderOption, CascaderInstance } from '@arco-design/web-vue'

const state = reactive({
  displayedNodes: [
    { label: 'Golden State Warriors', value: 'gsw' },
    {
      label: 'Boston Celtics',
      value: 'bos'
    }
  ] as CascaderOption[]
})

const options: CascaderOption[] = [
  {
    label: 'Golden State Warriors',
    value: 'gsw',
    children: [
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
  },
  {
    label: 'Boston Celtics',
    value: 'bos',
    children: [
      {
        label: 'Start Lineups',
        value: 'start',
        children: [
          {
            label: 'Kevin Garnett',
            value: 'kg',
            children: [
              { label: '2.11m', value: 'kg-height' },
              { label: 'black', value: 'kg-skin' }
            ]
          },
          {
            label: 'Paul Pierce',
            value: 'the-truth'
          },
          {
            label: 'Ray Allen',
            value: 'ray-allen'
          }
        ]
      },
      {
        label: 'Bench Lineups',
        value: 'bench',
        children: [
          { label: 'Glen Davis', value: 'big-baby' },
          { label: 'Nate Robinson', value: 'nate-ronbinson' }
        ]
      }
    ]
  }
]

const labelFlrmatter: CascaderInstance['formatLabel'] = (options) => {
  return options
    .map((v) => v.value)
    .join('-')
    .toUpperCase()
}

const getChildrenByNode = (node: CascaderOption) => {
  let foundNodes: CascaderOption[] = null
  function findNodeChildren(sourceNodes: CascaderOption[]) {
    for (let item of sourceNodes) {
      if (item.value === node.value) {
        foundNodes = item.children?.map(({ value, label, children }) => ({
          value,
          label,
          isLeaf: !children?.length
        }))
        break
      } else if (item.children) {
        findNodeChildren(item.children)
      }
    }
  }
  findNodeChildren(options)
  return foundNodes
}

const handleLoadMore: CascaderInstance['loadMore'] = (option, done) => {
  const children = getChildrenByNode(option)
  setTimeout(() => done(children), 1000)
}
</script>

<style lang="less" scoped></style>
