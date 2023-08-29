const { writeFile } = require('fs')
const str = require('./a')
const Mkdit = require('markdown-it')
const { resolve } = require('path')
// const hljs = require('highlight.js')

const md = Mkdit(
  'commonmark'
  // {
  //   highlight: function (str, lang) {
  //     if (lang && hljs.getLanguage(lang)) {
  //       try {
  //         return hljs.highlight(str, { language: lang }).value
  //       } catch (__) {}
  //     }

  //     return '' // use external default escaping
  //   }
  // }
)
  .use(require('markdown-it-for-inline'))
  .use(require('markdown-it-highlightjs'), { inline: true })
  // .use(require('markdown-it-code-copy'), { iconClass: 'my-icon' })
  .use(require('markdown-it-copy'), {btnText:"Copy"})
  // 这里需要引入css   https://github.com/ReAlign/markdown-it-copy/blob/master/theme/default.css
const result = md.render(str)

console.log(result)

const styleStr = `<link rel="stylesheet" href="../node_modules//highlight.js/styles/atom-one-dark.css" />`

writeFile(resolve(__dirname, './md.html'), styleStr + '\n' + result, undefined, (err) => {
  // writeFile(resolve(__dirname, './md.html'), result, undefined, (err) => {
  if (err) {
    console.log('FAIELD')
  } else {
    console.log('SUCCESSED')
  }
})
