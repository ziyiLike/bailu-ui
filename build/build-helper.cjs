/** 
* Auto generate web-types.json 、tags.json and attributes.json
* Run `pnpm run build:helper` to generate
*/
const { main } = require('components-helper')

// Judge the json folder exists
const fs = require('fs')
const path = require('path')
const jsonPath = path.resolve(__dirname, '../dist/json')
if (!fs.existsSync(jsonPath)) {
  fs.mkdirSync(jsonPath)
}

main({
  name: 'BaiLuUI',
  version: require('../package.json').version,
  entry: 'docs/component/*/*.md',
  outDir: 'dist/json',
  reComponentName,
  reDocUrl,
  reAttribute,
  reWebTypesSource,
  space: 2,
})

function reComponentName(title) {
  return (
    'lu-' +
    title
      .replace(/\B([A-Z])/g, '-$1')
      .replace(/[ ]+/g, '-')
      .toLowerCase()
  )
}

function reWebTypesSource(title) {
  const symbol =
    'Lu' +
    title
      .replace(/-/, ' ')
      .replace(/^\w|\s+\w/g, (item) => item.trim().toUpperCase())

  return { symbol }
}

function reDocUrl(fileName, header) {
  const docs = 'https://www.npmjs.com/package/bailu-ui'
  const _header = header ? header.replace(/[ ]+/g, '-') : undefined
  return docs + fileName + (_header ? '#' + _header : '')
}

function reAttribute(str, key) {
  switch (str) {
    case '':
    case '-':
    case '—':
      return undefined
    case 'v-model':
      return 'model-value'
    default:
      if (key === 'Subtags') {
        return str
          ? str
            .split('/')
            .map((name) => reComponentName(name.trim()))
            .join('/')
          : str
      } else if (key === 'Type') {
        return str.replace(/\(.*\)/g, '')
      } else {
        return str
      }
  }
}