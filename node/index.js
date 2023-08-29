const path = require('path')
const fs = require('fs')

fs.readFile(path.resolve(__dirname, '../study-note.md'), (err, data) => {
    console.log(data.toString());
  fs.writeFile(
    path.resolve(__dirname, './a.js'),
    `const str = ${JSON.stringify(data.toString())}`,
    undefined,
    (err) => {
      console.log(err)
    }
  )
})
