# 入职学习笔记

## Vite 自动导入插件

使用自动导入插件 [`unplugin-vite-import`](https://www.npmjs.com/package/unplugin-auto-import) 可以减除我们每次从某个库里引用模块的繁琐操作。我们使用的 `arco-design` 这个 UI 框架就可以使用这个插件实现**自动按需导入**。包括 `vue`、`vue-router`、`pinia` 等都可以使用该插件自动导入，无需手动导入：
vue 相关的库的自动导入：

```ts
import AutoImport from 'unplugin-auto-import/vite'
// import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export function configAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia']
    // resolvers: [ArcoResolver()]
  })
  // Components
}
```

按需导入 `arco-design` 以及自动导入项目中的组件：

```ts
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export function configComponents() {
  return Components({
    resolvers: [ArcoResolver({ sideEffect: true, importStyle: 'less' })]
  })
}
```

这样我们使用 `arco design` 以及 `@/components` 下的组件的时候可以直接使用，无需再手动引入。

**注：默认自动引入 `src/components` 下的 VUE 组件，如果你有其他地方的组件，或者你的组件目录并非这个目录，可以通过配置 `dirs` 目录来实现对他们的自动引入。**

这里需要注意，如果我们使用了 `arco-design` 的配置主题的功能，那么按需导入的时候需要在插件中开启 `less` 样式文件的引入（传入 `{importStyle: "less"}` 这个配置），传入之后就不需要在全局引入 `arco-design` 的 less 文件了，插件会帮我们按需引入，这得益于 `arco-design` 在组件库内部对组件样式变量做了非常细致的抽离提取，可以满足对组件细腻度的定制。

## unocss 的使用

官网[https://unocss.dev/guide/](https://unocss.dev/guide/)对 `unocss` 进行了详细的介绍，这里只记录要点。

### unocss 集成

官网有介绍并推荐使用专用的位于根目录的 `uno.config.ts` 配置文件来对 `unocss` 进行配置，这要能得到更好的 IDE 支持和其他集成。不过官网也给出了使用 `vite` 集成 `unocss` 的解决方案，简单地说就是通过 `unocss/vite` 包默认暴露的方法来将 `unocss` 配置为 `vite` 的插件，然后将，该插件传递给 `vite.config.ts` 的 `plugins` 配置中。详细可查[文档](https://unocss.dev/integrations/vite)。

### 配置

`unocss` 的配置项有以下这些：

- preset：预置，用于配置预置的一些配置。
- rules：定义规则。
- shortcuts：定义简写。
- theme：定义主题变量。
- variants：将自定义约定应用于规则。
- transformers：按照官方的说法，转换器用于转换源代码以支持约定。它提供了一个统一的接口来转换源代码以支持约定。
- 其他。

下面分别详细介绍这些配置的功能和配置方法。

#### preset

`preset` 是 `unocss` 的核心之一，在这里我们可以选择是否使用 `unocss` 本身的配置，以及我们还可以自定义自己的 `preset` 团队及自己用。比如如果我们需要使用 `unocss` 自己的 rules，就需要在 `preset` 配置中添加 `presetUno` 配置，如果使用通过属性来添加样式类名的功能就需要将 `presetAttributify` 配置到 `preset` 中。

#### rules

用来自定义生成 `css` 的规则，比如我们进行如下设置：

```ts
rules: [['ml-1', { 'margin-left': '8px' }]]
```

那么我们在元素或者组件上面就可以这样写来控制元素的样式：

```html
<a-button type="primary" class="ml-1" important-color-red @click="handleClick">{{ a }}</a-button>
```

但是这样配置有个缺点：不够灵活，`unocss` 提供了更加灵活的配置方式：

```ts
rules: [[/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${parseInt(d) * 8}px` })]]
```

这样子就可以这样子更加灵活地去写样式：

```html
<template>
  <div>
    <a-button type="primary" status="danger" ml-2>Danger Button</a-button>
  </div>
  <div>
    <a-button type="primary" status="danger" ml-3>Danger Button</a-button>
  </div>
</template>
```

#### shortcuts

按照官方的介绍，`shortcuts` 可以让我们把多个 `rule` 合并为一个简写形式。用法举例：

```ts
shortcuts: {
    'flex-center': ["flex", "justify-center", "items-center"],
    'flex-btw': ["flex", "flex-justify-between", "items-center"]
}
```

#### theme

`unocss` 同样支持主题系统，我们可以在配置中通过配置 `theme` 字段来主题变量，和 `Mui` 的主题配置是有类似的地方的。用法：

```ts
theme: {
      colors: {
        primary: '#3f51b5',
        light: '#fff'
      }
    }
```

当然 `theme` 配置项不只是配置颜色，还可以配置断点（`breakpoints`）等，具体查看[官方文档](https://unocss.dev/config/theme)。

#### variants

`variants` 允许我们对现有的规则应用一些变体，比如下面的例子：

```ts
variants: [
  // hover:
  (matcher) => {
    if (!matcher.startsWith('children:')) return matcher
    return {
      // slice `hover:` prefix and passed to the next variants and rules
      matcher: matcher.slice(9),
      selector: (s) => `${s}>*`
    }
  }
]
```

这个 `variants` 定义好后，我们在组件中这样使用：

```html
<div children:ml-5>
  <p text-light bg-primary>this is primary text</p>
</div>
<div children:ml-10>
  <p text-light bg-primary>this is primary text</p>
</div>
```

`unocss` 会生成如下的 css 配置：

```css
[children\:ml-5=''] > * {
  margin-left: 40px;
}

[children\:ml-10=''] > * {
  margin-left: 80px;
}
```

我们还可以用 `hover` 效果来举例：
配置：

```ts
// hover
variants: [
  (matcher) => {
    if (!matcher.startsWith('hover:')) return matcher
    return {
      // slice `hover:` prefix and passed to the next variants and rules
      matcher: matcher.slice(6),
      selector: (s) => `${s}:hover`
    }
  }
]
```

使用：

```html
<p text-light bg-primary hover:bg-white hover:text-primary>this is primary text</p>
```

生成的 css：

```css
[hover\:text-primary='']:hover {
  --un-text-opacity: 1;
  color: rgba(63, 81, 181, var(--un-text-opacity));
}

[hover\:bg-white='']:hover {
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}
```

#### transformers

对于 `transformers` 的理解还需要更具体，加强理解后再来记录。

## vite 环境变量

vite 在一个特殊的 `import.meta.env` 上面暴露环境变量。我们可以配置不同环境的环境变量：

- 默认的所有情况都会加载：.env
- 本地加载，会被 Git 忽略：.env.local
- 开发环境加载：.env.development
- 生产环境加载：.env.production
- 本地开发环境加载，会被 Git 忽略：.env.development.local
- 本地生产环境加载，会被 Git 忽略：.env.production.local

这里需要注意他们之间的优先级：

```
.env < .env.local < .env.[mode] < .env.[mode].local < 环境中配置的环境变量
```

**注：windows 命令行设置和查看环境变量的命令：**

- 创建和设置环境变量：set ${path}=${value}
- 删除环境变量：set ${path}=
- 查看环境变量：echo %${path}%

## 常见问题记录

- Vite 启动后服务可以通过 `localhost` 和 `127.0.0.1` 访问却不能通过 IP 地址访问，需要配置 `server.host` 为 `0.0.0.0`。
- 使用 `unplugin-auto-import` 自动引入模块后，使用的时候没有类型声明，这是因为我们没有将生成的 `auto-imports.d.ts` 这个声明文件配置到 `tsconfig.json`（或者 `tsconfig.app.json`）中。ts 找不到相应的类型声明。

- import.meta.glob: 用法如下

```ts
const modules: any = import.meta.glob('./types/*.ts', { eager: true })
console.log(modules)
let result: any[] = []
Object.keys(modules).forEach((key) => {
  const defaultModule = modules[key].default
  if (!defaultModule) return
  const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
  result.push(...moduleList)
})
console.log(result)
```

- `toRaw` 和 `markRow`：
  - toRaw 是将一个响应式的对象完全转化为一个普通的对象
    普通对象的改变不会引起页面的变化，当我们改变数据不影响页面的时候一般会使用他
  - markRaw 标记一个对象，不会被 vue 的响应式函数转化为响应式对象
    有些值不应该被设置成响应式的，比如第三方的类库
    当有一些比较大的列表的时候，跳过响应式的转化会增加性能
