<template>
  <div>
    <a-button type="primary" class="ml-1" important-color-red @click="handleClick">
      {{ a }}
    </a-button>
  </div>
  <div>
    <a-button type="primary" status="danger" ml-2>Danger Button</a-button>
  </div>
  <div>
    <a-button type="primary" status="danger" ml-3>Danger Button</a-button>
  </div>
  <div flex-center>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
  <div flex-btw>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
  <p text-blue>this is blue text</p>
  <div children:ml-5>
    <p text-light bg-primary>this is primary text</p>
  </div>
  <div children:ml-10>
    <p text-light bg-primary hover:bg-white hover:text-primary>this is primary text</p>
  </div>
  <div>
    <p>MyName: {{ myName }}</p>
  </div>
  <slot-test>
    <template v-slot:header="header">this is custom header {{ header.id }}</template>
    <template #content="content">this is custom content {{ content.id }}</template>
    <template #[footer]
    >this is custom {{ footer }} <a-button type="primary" @click="changeSlot">change</a-button>
    </template>
  </slot-test>
  <a-button @click="handleAddCount" type="primary" status="danger">ADD COUNT {{ count }}</a-button>
</template>

<script lang="ts" setup>
// import dayjs from "dayjs"
// import { ref } from 'vue'
import AboutView from '@/views/AboutView.vue'
// import SlotTest from '@/components/SlotTest.vue'
import { provideCountKey } from '@/types/enums'

const count = ref(0)

provide(
  provideCountKey,
  computed(() => count.value)
)

const handleAddCount = () => {
  count.value++
}

const footer = ref<'footer' | 'content'>('footer')

const changeSlot = () => {
  if (footer.value === 'footer') {
    footer.value = 'content'
  } else {
    footer.value = 'footer'
  }
}


const a = ref(0)
const myName = import.meta.env.MY_NAME

console.log(dayjs('2023-07-04').format())

function handleClick() {
  a.value++
  console.log(a)
}
</script>

<style lang="less" scoped></style>
