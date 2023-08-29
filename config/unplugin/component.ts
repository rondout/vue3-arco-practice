import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export function configComponents() {
  return Components({
    dirs:["src/views", "src/components"],
    resolvers: [ArcoResolver({ sideEffect: true, importStyle: 'less' })]
  })
}
