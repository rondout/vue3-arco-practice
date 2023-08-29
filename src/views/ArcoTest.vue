<template>
  <h2>Arco Design Test Page</h2>
  <a-collapse>
    <a-collapse-item key="tabs" header="Tabs Test">
      <tabs-test></tabs-test>
    </a-collapse-item>
    <a-collapse-item key="list" header="List Test">
      <a-list>
        <a-list-item v-for="idx in 4" :key="idx">
          <a-list-item-meta
            title="Beijing Bytedance Technology Co., Ltd."
            description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
          >
            <template #avatar>
              <a-avatar shape="square">
                <img
                  alt="avatar"
                  src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </a-avatar>
            </template>
          </a-list-item-meta>
          <template #actions>
            <icon-edit />
            <icon-delete />
          </template>
        </a-list-item>
      </a-list>
    </a-collapse-item>
    <a-collapse-item key="popover" header="Popover Test">
      <a-popover title="this is popover title">
        <a-button ml-8 type="primary" status="success">hover me</a-button>
        <template #content>
          <h2>this is popover content</h2>
          <div flex-btw>
            <a-button>cancel</a-button>
            <a-button type="primary" ml-2>ok</a-button>
          </div>
        </template>
      </a-popover>
      <a-popover title="this is popover title" trigger="click">
        <a-button ml-8 type="primary" status="success">click me</a-button>
        <template #content>
          <h2>this is popover content</h2>
          <div flex-btw>
            <a-button>cancel</a-button>
            <a-button type="primary" ml-2>ok</a-button>
          </div>
        </template>
      </a-popover>
    </a-collapse-item>
    <a-collapse-item key="link" header="Link Test">
      <h4>LINK TEST</h4>
      <a-link href="/">back to home</a-link>
    </a-collapse-item>
    <a-collapse-item key="typography" header="Typography Test">
      <h4>Typography Test</h4>
      <a-typography>
        <a-typography-title> H1. The Pragmatic Romanticism </a-typography-title>
        <a-typography-title :heading="2"> H2. The Pragmatic Romanticism </a-typography-title>
        <a-typography-title :heading="3"> H3. The Pragmatic Romanticism </a-typography-title>
        <a-typography-title :heading="4"> H4. The Pragmatic Romanticism </a-typography-title>
        <a-typography-title :heading="5"> H5. The Pragmatic Romanticism </a-typography-title>
        <a-typography-title :heading="6"> H6. The Pragmatic Romanticism </a-typography-title>
      </a-typography>
    </a-collapse-item>
    <a-collapse-item key="divider" header="Divider Test">
      <a-divider m-12></a-divider>
      <a-divider m-12>divider with some text</a-divider>
      <a-divider important-m-14 important-ml-0>
        <a-button type="primary">divider with components</a-button>
      </a-divider>
      <div flex-center class="divider-demo">
        <span>Item 1</span>
        <a-divider direction="vertical" />
        <span>Item 2</span>
        <a-divider direction="vertical" />
        <span>Item 3</span>
      </div>
    </a-collapse-item>
    <a-collapse-item key="grid" header="Grid Test">
      <h4 mb-2 mt-2 font-bold>普通布局</h4>
      <a-row :gutter="[12, 12]">
        <a-col :span="12">
          <div>1</div>
        </a-col>
        <a-col :span="12">
          <div>1</div>
        </a-col>
        <a-col :span="4">
          <div>2</div>
        </a-col>
        <a-col :span="4">
          <div>2</div>
        </a-col>
        <a-col :span="4">
          <div>2</div>
        </a-col>
        <a-col :span="4">
          <div>2</div>
        </a-col>
        <a-col :span="4">
          <div>2</div>
        </a-col>
        <a-col :span="4">
          <div>2</div>
        </a-col>
      </a-row>
      <h4 mb-2 mt-2 font-bold>响应式布局</h4>
      <a-row :gutter="[12, 12]">
        <a-col
          v-for="(item, index) of Array.from({ length: 24 })"
          :key="index"
          v-bind="colBreakPoints"
        >
          index{{ index }}
        </a-col>
      </a-row>
    </a-collapse-item>
    <a-collapse-item key="space" header="Space Test">
      <a-space direction="vertical" fill :size="16">
        <a-button type="primary" long>Item1</a-button>
        <a-button type="primary" long>Item2</a-button>
        <a-button type="primary" long>Item3</a-button>
      </a-space>
      <a-space mt-4 direction="horizontal" fill size="large">
        <a-button type="primary" long>Item1</a-button>
        <a-button type="primary" long>Item2</a-button>
        <a-button type="primary" long>Item3</a-button>
      </a-space>
    </a-collapse-item>
    <a-collapse-item key="avatar" header="Avatar Test">
      <a-avatar>a</a-avatar>
      <a-avatar shape="square">avatar</a-avatar>
      <a-avatar :size="64">Joey Tribiani</a-avatar>
      <a-avatar>
        <img :src="logoUrl" alt="" />
      </a-avatar>
      <a-avatar :trigger-icon-style="{ color: '#3491FA' }">
        <template #trigger-icon>
          <icon-camera></icon-camera>
        </template>
      </a-avatar>
    </a-collapse-item>
    <a-collapse-item key="badge" header="Badge Test">
      <a-space :size="40">
        <a-badge :count="9">
          <a-avatar shape="square" />
        </a-badge>
        <a-badge :count="9" dot :dotStyle="{ width: '10px', height: '10px' }">
          <a-avatar shape="square" />
        </a-badge>
        <a-badge :dotStyle="{ height: '16px', width: '16px', fontSize: '14px' }">
          <template #content>
            <IconClockCircle :style="{ verticalAlign: 'middle', color: 'var(--color-text-2)' }" />
          </template>
          <a-avatar shape="square" />
        </a-badge>
        <a-space :size="44">
          <a-badge text="this-is-badge-text">
            <a-avatar shape="square" />
          </a-badge>
          <a-badge text="this-is-badge-text">
            <a-avatar shape="square" />
          </a-badge>
          <a-badge text="NEW">
            <a-avatar shape="square">
              <span>
                <icon-camera />
              </span>
            </a-avatar>
          </a-badge>
        </a-space>
      </a-space>
    </a-collapse-item>
    <a-collapse-item key="calendar" header="Calendar Test">
      <a-calendar v-model="state.calendarValue"></a-calendar>
      <h2>selected day: {{ state.calendarValue }}</h2>
    </a-collapse-item>
    <a-collapse-item key="card" header="Card Test">
      <div :style="{ display: 'flex' }">
        <a-card :style="{ width: '360px' }" title="Arco Card" hoverable>
          <template #extra>
            <a-link>More</a-link>
          </template>
          Card content <br />
          Card content
        </a-card>
        <a-card class="card-demo" title="Custom hover style" hoverable>
          <template #extra>
            <a-link>More</a-link>
          </template>
          Card content <br />
          Card content
        </a-card>
      </div>
      <a-card title="arco card title" hoverable> this is arco card content </a-card>
      <a-card mt-6 :bordered="false" title="arco card title" hoverable>
        this is arco card content
      </a-card>
    </a-collapse-item>
    <a-collapse-item key="carousel" header="Carousel Test">
      <h2>基本用法&自动切换</h2>
      <a-carousel
        auto-play
        :style="{
          width: '600px',
          height: '240px'
        }"
        :default-current="2"
        @change="handleChange"
      >
        <a-carousel-item v-for="image in images">
          <img
            :src="image"
            :style="{
              width: '100%'
            }"
          />
        </a-carousel-item>
      </a-carousel>
      <h2>切换方向&渐隐切换</h2>
      <a-carousel
        auto-play
        :style="{
          width: '600px',
          height: '240px'
        }"
        :default-current="2"
        @change="handleChange"
        direction="vertical"
        animation-name="fade"
      >
        <a-carousel-item v-for="image in images">
          <img
            :src="image"
            :style="{
              width: '100%'
            }"
          />
        </a-carousel-item>
      </a-carousel>
      <h2>卡片化</h2>
      <a-carousel
        :autoPlay="true"
        animation-name="card"
        show-arrow="never"
        indicator-position="outer"
        :style="{
          width: '100%',
          height: '240px'
        }"
      >
        <a-carousel-item v-for="image in images" :style="{ width: '60%' }">
          <img
            :src="image"
            :style="{
              width: '100%'
            }"
          />
        </a-carousel-item>
      </a-carousel>
    </a-collapse-item>
    <a-collapse-item key="empty" header="Empty Test">
      <a-empty></a-empty>
      <a-empty>
        <template #image>
          <icon-exclamation-circle-fill />
        </template>
        No data, please reload!
      </a-empty>
    </a-collapse-item>
    <a-collapse-item key="image" header="Image Test">
      <a-image
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp="
      ></a-image>
    </a-collapse-item>
  </a-collapse>
</template>

<script lang="ts" setup>
import logoUrl from '@/assets/logo.svg'
import {
  IconCamera,
  IconExclamationCircleFill,
  IconEdit,
  IconDelete,
  IconClockCircle
} from '@arco-design/web-vue/es/icon'
import TabsTest from "@/components/display/TabsTest.vue"

const state = reactive({
  calendarValue: new Date()
})

const colBreakPoints = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 4,
  xl: 3,
  xxl: 2
}

const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp'
]

const handleChange = (value: number) => {
  // console.log(value)
}

onActivated(() => {
  console.log('ArcoTest component is activated')
})

onMounted(() => {
  console.log('ArcoTest component is mounted')
})
</script>

<style lang="less" scoped>
.arco-col {
  & > div {
    background-color: aqua;
  }
}
.card-demo {
  width: 360px;
  margin-left: 24px;
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
}
</style>
