/*
 * @Author: ShawnPhang
 * @Date: 2021-09-22 18:24:11
 * @Description: 生成MD文件
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-22 20:16:22
 * @site: m.palxp.cn / blog.palxp.com
 */
console.log('---- Start -----')
const fs = require('fs-extra')
const path = require('path')
const jsdoc2md = require('jsdoc-to-markdown')

jsdoc2md
  .render({
    'example-lang': 'javascript',
    files: path.resolve(process.cwd(), './dist/index.es.js'),
    'name-format': 'backticks',
    // template: fs.readFileSync('./scripts/api.handlebars', 'utf8'),
  })
  .then((text) => {
    if (text) {
      console.log('---- 生成文档完毕 ----')
      fs.outputFile(path.resolve(process.cwd(), './README.md'), text)
    } else {
      console.warn('---- 没有生成文档 ----')
    }
  })
