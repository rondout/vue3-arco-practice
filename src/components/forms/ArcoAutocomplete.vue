<template>
  <h3>nomatter uppercase or lowercase</h3>
  <a-auto-complete :data="data" :style="{ width: '360px' }" placeholder="please enter something" />
  <h3>strict uppercase or lowercase</h3>
  <a-auto-complete
    :data="data"
    :style="{ width: '360px' }"
    placeholder="please enter something"
    strict
  />
  <a-divider my-3></a-divider>
    <form-design ref="formRef" :model="state.formValues" :field-list="fieldList"></form-design>
  <a-button @click="validate">ok</a-button>
</template>

<script lang="ts" setup>
import { FormDesign, IFieldItem } from '@wyg/business-components'
import {} from "@wyg/business-components"
import { myTool, getBasketBall, Sports, basketball, Football, MyFootballTypes, genarateFootball, createFootballFunction  } from 'hsf-tools'
// import { } from 'hsf-tools/namespac-test'
import { createMemoryHistory } from 'vue-router'

myTool('wwr')
const newBasketball: Sports.Basketball = getBasketBall('air-jordan')

console.log(basketball, newBasketball)

const state = reactive({
  formValues: {}
})

const fieldList: IFieldItem[] = [
  {
    identKey: 'custom',
    name: '自定义1111',
    alias: '自定义别名',
    type: 'input',
    hide: 0,
    required: 0,
    status: 1,
    placeholder: '自定义提示文字www',
    /** 表单字段对应类型组件的额外属性和其他需要添加的属性都加在这个对象里面 */
    extendAttr: {
      options: [],
      data: [],
      rules: [{ required: true, message: 'is required' }],
      colProps: {
        /** 栅格占位格数 */
        span: 24
      }
    }
  },
  {
    identKey: 'table',
    name: '表格数据',
    type: 'input',
    status: 1,
    alias: 'xxx',
    hide: 0,
    required: 1,
    placeholder: ' ',
    /** 表单字段对应类型组件的额外属性和其他需要添加的属性都加在这个对象里面 */
    extendAttr: {
      colProps: {
        /** 栅格占位格数 */
        span: 24
      }
    }
  }
]

const formRef = ref()

const validate = () => {
  const formModel = formRef.value.getFromInstance()
  console.log(formModel.validate())
}

const data = ['Beijing', 'Shanghai', 'Chengdu', 'WuHan']
</script>

<style lang="less" scoped></style>
