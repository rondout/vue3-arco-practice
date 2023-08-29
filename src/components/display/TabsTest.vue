<template>
  <h2>Basic Usage</h2>
  <a-tabs default-active-key="2">
    <a-tab-pane key="1" title="Tab 1"> Content of Tab Panel 1 </a-tab-pane>
    <a-tab-pane key="2" title="Tab 2"> Content of Tab Panel 2 </a-tab-pane>
    <a-tab-pane key="3">
      <template #title>Tab 3</template>
      Content of Tab Panel 3
    </a-tab-pane>
  </a-tabs>
  <h2>With Extra Contents</h2>
  <a-tabs>
    <template #extra>
      <a-button>Action</a-button>
    </template>
    <a-tab-pane key="1" title="Tab 1"> Content of Tab Panel 1 </a-tab-pane>
    <a-tab-pane key="2" title="Tab 2"> Content of Tab Panel 2 </a-tab-pane>
    <a-tab-pane key="3" title="Tab 3"> Content of Tab Panel 3 </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
