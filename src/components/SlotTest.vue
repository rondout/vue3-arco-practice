<template>
<div class="my-container">
    <div class="header">
        <slot name="header" id="#header">header</slot>
    </div>
    <div class="content">
        <slot name="content" id="#content">content</slot>
    </div>
    <div class="footer">
        <slot name="footer" id="#footer">footer</slot>
    </div> 
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>

</style>