const fs = require('node:fs')
const path = require('node:path')
const filePath = path.join(process.env.INIT_CWD, '.autorc')
const fileConfigObject = { extends: '@srmcguirt/auto-config' }
if (!fs.existsSync(filePath))
  fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
