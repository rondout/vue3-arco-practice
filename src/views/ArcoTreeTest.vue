<template>
  <h2>Arco Tree Test</h2>
  <a-collapse>
    <a-collapse-item key="basic" header="Basic Tree">
      <basic-tree></basic-tree>
    </a-collapse-item>
    <a-collapse-item key="selectable" header="Selectable Tree">
      <selectable-tree></selectable-tree>
    </a-collapse-item>
    <a-collapse-item key="checkable" header="Checkable Tree">
      <checkable-tree></checkable-tree>
    </a-collapse-item>
    <a-collapse-item key="dynamic" header="Dynamic Data Fetch Tree">
      <dynamic-data-tree></dynamic-data-tree>
    </a-collapse-item>
    <a-collapse-item key="custom-fields" header="Custom Field Names and Icons">
      <custom-field-names-tree></custom-field-names-tree>
    </a-collapse-item>
  </a-collapse>
</template>

<script lang="ts" setup>
import BasicTree from '@/components/trees/BasicTree.vue'
import SelectableTree from '@/components/trees/SelectableTree.vue'
import CheckableTree from '@/components/trees/CheckableTree.vue'
import DynamicDataTree from '@/components/trees/DynamicDataTree.vue'
import CustomFieldNamesTree from '@/components/trees/CustomFieldNamesTree.vue'

onMounted(() => {
  console.log('TREE_MOUNTED')
})
</script>

<style lang="less" scoped></style>
