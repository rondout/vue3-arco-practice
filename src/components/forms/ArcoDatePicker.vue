<template>
  <h3>Baisc Usage</h3>
  <a-date-picker v-model="state.selectedDate"></a-date-picker>
  <h3>Year Picker</h3>
  <a-year-picker v-model="state.selectedYear"></a-year-picker>
  <h3>Month Picker</h3>
  <a-month-picker v-model="state.selectedMonth"></a-month-picker>
  <h3>Quarter Picker</h3>
  <a-quarter-picker v-model="state.selectedQuarter"></a-quarter-picker>
  <h3>Date Picker With Time Selection</h3>
  <a-date-picker show-time v-model="state.selectedDateWithTime"></a-date-picker>
</template>

<script lang="ts" setup>
const state = reactive({
  selectedDate: new Date(),
  selectedDateWithTime: new Date(),
  selectedYear: '2023',
  selectedMonth: '2022-01',
  selectedQuarter: ''
})

watchEffect(() => {
  console.log(state.selectedDate, state.selectedYear, state.selectedMonth, state.selectedQuarter)
})
</script>

<style lang="less" scoped></style>
