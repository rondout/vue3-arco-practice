<script lang="ts" setup>
enum ComponentEnums {
  ANTV_TEST,
  SWIM_TEST,
  ORG_TEST
}

const current = ref(ComponentEnums.SWIM_TEST)

const handleTabClick = (tab: ComponentEnums) => {
  current.value = tab
}
</script>

<template>
  <div>
    <a-button-group>
      <a-button @click="handleTabClick(ComponentEnums.ANTV_TEST)">Test</a-button>
      <a-button @click="handleTabClick(ComponentEnums.SWIM_TEST)">Swim Test</a-button>
      <a-button @click="handleTabClick(ComponentEnums.ORG_TEST)">Organization Test</a-button>
    </a-button-group>
    <antv-test v-if="current === ComponentEnums.ANTV_TEST"></antv-test>
    <antv-tunnel v-if="current === ComponentEnums.SWIM_TEST"></antv-tunnel>
    <antv-org v-if="current === ComponentEnums.ORG_TEST"></antv-org>
  </div>
</template>

<style lang="less" scoped></style>
