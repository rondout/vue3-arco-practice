import AutoImport from 'unplugin-auto-import/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export function configAutoImport() {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      {
        dayjs: [['default', 'dayjs']]
      },
      {
        axios: [['default', 'axios']]
      }
    ],
    dts: true
    // 在components里面配置了   这里就不需要再配置第二次了 重复的是没有意义的
    // resolvers: [ArcoResolver({importStyle: 'less' })]
  })
  // Components
}
