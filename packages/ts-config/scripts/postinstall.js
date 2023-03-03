const fs = require('node:fs')
const path = require('node:path')
const filePath = path.join(process.env.INIT_CWD, 'tsconfig.json')
const fileConfigObject = { extends: '@srmcguirt/ts-config' }
if (!fs.existsSync(filePath))
  fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
