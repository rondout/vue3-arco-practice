<template>
  <a-switch v-model:model-value="state.selectType" checked-value="radio" unchecked-value="checkbox">
    <template #checked> RADIO </template> <template #unchecked> CHECKBOX </template></a-switch
  >
  <a-table
    :columns="columns"
    :data="data"
    row-key="name"
    v-model:selectedKeys="state.selectedKeys"
    :row-selection="rowSelection"
  />
  <p>{{ state.selectType?.toLocaleUpperCase() }}</p>
  <p>{{ state.selectedKeys }}</p>
</template>

<script lang="ts" setup>
import { TableRowSelection, TableColumnData } from '@arco-design/web-vue'

const state = reactive({
  selectedKeys: [] as string[],
  selectType: 'checkbox' as TableRowSelection['type']
})

const rowSelection = computed<TableRowSelection>(() => ({
  showCheckedAll: true,
  type: state.selectType
}))

const columns:TableColumnData[] = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Salary',
    dataIndex: 'salary'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width:100,
    ellipsis:true,
    tooltip:true
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]
const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com'
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  }
])
</script>
