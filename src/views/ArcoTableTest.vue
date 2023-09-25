<template>
  <h2>Arco Table Test</h2>
  <a-collapse>
    <a-collapse-item key="basic" header="Basic Table Usage">
      <basic-table></basic-table>
    </a-collapse-item>
    <a-collapse-item key="selectable" header="Selectable Table">
      <selectable-table></selectable-table>
    </a-collapse-item>
    <a-collapse-item key="tree" header="Tree Table">
      <tree-table></tree-table>
    </a-collapse-item>
    <a-collapse-item key="custom-render" header="Custom Render Table">
      <custom-render-table></custom-render-table>
    </a-collapse-item>
    <a-collapse-item key="attributes" header="Table Attributes Test">
      <table-attributes></table-attributes>
    </a-collapse-item>
    <a-collapse-item key="sortable" header="Sortable Table">
      <sortable-table></sortable-table>
    </a-collapse-item>
    <a-collapse-item key="filterable" header="Filterable Table">
      <template #header>
        <a-button @click.stop>Filterable Table</a-button>
      </template>
      <h3 mb-2>arco native filter</h3>
      <filterable-table></filterable-table>
      <h3 mb-2>custom filter</h3>
      <custom-filterable-table></custom-filterable-table>
    </a-collapse-item>
    <a-collapse-item key="head-group-filter" header="Grouped Header Table">
      <head-group-table></head-group-table>
    </a-collapse-item>
  </a-collapse>
</template>

<script lang="ts" setup>
import BasicTable from '@/components/tables/BasicTable.vue'
import SelectableTable from '@/components/tables/SelectableTable.vue'
import TreeTable from '@/components/tables/TreeTable.vue'
import TableAttributes from '@/components/tables/TableAttributes.vue'
import SortableTable from '@/components/tables/SortableTable.vue'
import FilterableTable from '@/components/tables/FilterableTable.vue'
import CustomFilterableTable from '@/components/tables/CustomFilterableTable.vue'
import HeadGroupTable from '@/components/tables/HeadGroupTable.vue'
import CustomRenderTable from '@/components/tables/CustomRenderTable.vue'

onMounted(() => {
  console.log('TABLE_MOUNTED')
})
</script>

<style lang="less" scoped></style>
