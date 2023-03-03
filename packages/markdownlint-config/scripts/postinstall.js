const fs = require('node:fs')
const path = require('node:path')
const filePath = path.join(process.env.INIT_CWD, '.markdownlint.json')
const fileConfigObject = { extends: './node_modules/@srmcguirt/markdownlint-config/index.json' }
if (!fs.existsSync(filePath))
  fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
