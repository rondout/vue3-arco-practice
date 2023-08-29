<template>
  <div class="about">
    <h1>This is an about page and conunt is {{ count }} from root</h1>
    <a-button type="primary" ml-3 @click="changeColor">{{ color }}</a-button>
  </div>
</template>

<script lang="ts" setup>
import { provideCountKey } from '@/types/enums'

console.log(dayjs('2023-07-04').format())
const count = inject(provideCountKey)

// const count = computed(() => )

console.log(axios.Axios)
const fontWeight = 700

const color = ref<'green' | 'red'>('green')

const changeColor = () => {
  color.value = color.value === 'green' ? 'red' : 'green'
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
h1 {
  color: v-bind('color');
  font-weight: v-bind('fontWeight');
}
</style>
