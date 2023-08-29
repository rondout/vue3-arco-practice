<template>
  <h3>Basic Radio Usage</h3>
  <a-radio v-model="state.selected">check me</a-radio>
  <h3 my-1>Radio Group</h3>
  <h4>{{ genderText }}</h4>
  <a-radio-group v-model="state.gender">
    <a-radio value="M">Male</a-radio>
    <a-radio value="F">Female</a-radio>
  </a-radio-group>
</template>

<script lang="ts" setup>
const state = reactive({
  selected: false,
  gender: 'M'
})

const genderText = computed(() => {
    if(state.gender === "M"){
        return "You're a handsome gentleman"
    }
    return "You're a pretty girl"
})
</script>

<style lang="less" scoped></style>
