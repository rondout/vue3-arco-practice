<template>
  <h2>Arco Forms Test</h2>
  <a-collapse>
    <a-collapse-item key="auto_complete" header="Auto Complete">
      <arco-autocomplete></arco-autocomplete>
    </a-collapse-item>
    <a-collapse-item key="cascader" header="Arco Cascader">
      <arco-cascader></arco-cascader>
    </a-collapse-item>
    <a-collapse-item key="checkbox" header="Arco Checkbox">
      <arco-checkbox></arco-checkbox>
    </a-collapse-item>
    <a-collapse-item key="date-picker" header="Arco Date Picker">
      <arco-date-picker></arco-date-picker>
    </a-collapse-item>
    <a-collapse-item key="input" header="Arco Input">
      <arco-input></arco-input>
    </a-collapse-item>
    <a-collapse-item key="radio" header="Arco Radio">
      <arco-radio></arco-radio>
    </a-collapse-item>
    <a-collapse-item key="slider" header="Arco Slider">
      <arco-slider></arco-slider>
    </a-collapse-item>
    <a-collapse-item key="select" header="Arco Select">
      <arco-select></arco-select>
    </a-collapse-item>
    <a-collapse-item key="switch" header="Arco Switch">
      <arco-switch></arco-switch>
    </a-collapse-item>
    <a-collapse-item key="form-demos" header="Form Demos">
      <form-demos></form-demos>
    </a-collapse-item>
    <a-collapse-item key="others" header="Other Components">
      <slot-test></slot-test>
      <hello-world msg="this is a new message"></hello-world>
      <welcome-item></welcome-item>
    </a-collapse-item>
  </a-collapse>
</template>

<script lang="ts" setup>
// import ArcoAutocomplete from "@/components/forms/ArcoAutocomplete.vue"
// import ArcoCascader from "@/components/forms/ArcoCascader.vue"
// import ArcoCheckbox from "@/components/forms/ArcoCheckbox.vue";
// import ArcoDatePicker from "@/components/forms/ArcoDatePicker.vue"
// import ArcoInput from "@/components/forms/ArcoInput.vue";
// import ArcoRadio from "@/components/forms/ArcoRadio.vue"
// import FormDemos from "@/components/forms/FormDemos.vue"

</script>

<style lang="less" scoped></style>
