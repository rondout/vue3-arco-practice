const { log } = require('console')

setTimeout(() => {
  console.log('setTimeout executed1')
}, 0)

setTimeout(() => {
  console.log('setTimeout executed2')
}, 0)

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log('Promise.then executed')
  }, 1)
})

new Promise((r) => {
  log('promise code')
  r()
}).then((res) => {
  setTimeout(() => {
    console.log('Promise execute ended')
  }, 0)
})
