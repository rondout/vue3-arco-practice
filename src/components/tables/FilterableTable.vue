<template>
  <a-table :columns="columns" :data="data" :filter-icon-align-left="true" />
</template>

<script lang="ts" setup>
import { TableColumnData, TableFilterable } from '@arco-design/web-vue'
import { e } from 'unocss'

const handleNameFilterChange: TableFilterable['filter'] = (filteredValue, record) => {
  return filteredValue.some((filter) => record.name?.toLowerCase().startsWith(filter.toLowerCase()))
}

const handleSalaryFilterChange: TableFilterable['filter'] = (
  filteredValue: ('gt' | 'lt' | string)[],
  record
) => {
  function checkFilter(condition: 'gt' | 'lt' | string) {
    if (!condition) {
      return true
    }
    if (condition === 'gt') {
      return parseInt(record.salary) >= 25000
    } else {
      return parseInt(record.salary) <= 25000
    }
  }

  return filteredValue.some((v) => checkFilter(v))
}

const columns: TableColumnData[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    filterable: {
      filter: handleNameFilterChange,
      filters: [
        { text: 'Axxxx', value: 'a' },
        { text: 'Kxxx', value: 'k' }
      ],
      multiple: true
    }
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    filterable: {
      filter: handleSalaryFilterChange,
      filters: [
        { text: '>=25000', value: 'gt' },
        { text: '<=25000', value: 'lt' }
      ],
      multiple: true
    }
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
