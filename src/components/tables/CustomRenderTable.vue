<template>
  <h2 mb-2>By slot</h2>
  <a-table :columns="columns" :data="data">
    <template #name="{ record }">
      <div flex-start flex-items-end>
        <span>Name: </span>
        <a-link>{{ record.name }}</a-link>
      </div>
    </template>
  </a-table>
  <h2 mb-2>By {{"<a-table-column />"}}</h2>
  <a-table :columns="columns" :data="data">
    <template #columns>
      <a-table-column :data-index="'name'" #cell="{ record }">
        <div flex-start flex-items-end>
          <span>Name: </span>
          <a-link>{{ record.name }}</a-link>
        </div>
      </a-table-column>
      <a-table-column title="Salary" data-index="salary"></a-table-column>
      <a-table-column title="Address" data-index="address"></a-table-column>
      <a-table-column title="Email" data-index="email"></a-table-column>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { TableColumnData } from '@arco-design/web-vue'

const columns: TableColumnData[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    slotName: 'name'
  },
  {
    title: 'Salary',
    dataIndex: 'salary'
  },
  {
    title: 'Address',
    dataIndex: 'address'
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
