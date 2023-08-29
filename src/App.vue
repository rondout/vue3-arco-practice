<template>
  <a-space direction="vertical">
    <a-button-group>
      <a-tooltip v-for="item of navigationBarItems" :key="item.path" :content="item.tooltip">
        <a-button @click="navigateTo(item.path)" type="primary">{{ item.title }}</a-button>
      </a-tooltip>
    </a-button-group>
  </a-space>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <keep-alive>
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <h1>loading...</h1>
          </template>
        </Suspense>
      </keep-alive>
    </template>
  </router-view>
  <HelloWorld msg="I'm Hanshufei"></HelloWorld>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
const router = useRouter()
const navigateTo = (path: string) => {
  router.push(path)
}

class NavigationBarItemFactory {
  constructor(public path: string, public tooltip: string, public title: string) {}
}

const navigationBarItems = [
  new NavigationBarItemFactory('/', 'Click to view Home Page', 'Home'),
  new NavigationBarItemFactory('/about', 'Click to view About Page', 'About'),
  new NavigationBarItemFactory('/arco', 'Click to view Arco Design Page', 'Arco Design'),
  new NavigationBarItemFactory('/arco-tables', 'Click to view Arco Table Page', 'Table Page'),
  new NavigationBarItemFactory('/arco-trees', 'Click to view Arco Tree Page', 'Tree Page'),
  new NavigationBarItemFactory('/arco-forms', 'Click to view Arco Forms Page', 'Forms Page'),
  new NavigationBarItemFactory(
    '/arco-custom-components',
    'Click to view Custom Components from NPM',
    'Custom Componenst Page'
  )
]
</script>

<style lang="less" scoped></style>
