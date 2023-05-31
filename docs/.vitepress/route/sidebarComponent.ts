import fs from 'fs'


let SidebarComponentArray: any[] = []

fs.readdirSync('./docs/component').map(pkg => {
  if (fs.statSync(`./docs/component/${pkg}`).isDirectory()) {
    SidebarComponentArray.push({
      text: pkg.split('-')[1],
      collapsed: false,
      items: fs.readdirSync(`./docs/component/${pkg}`).map(file => {
        // 将文件名转为首字母大写
        const text = file.replace('.md', '').split('-')[1]
        // 将文件名转为首字母大写
        const link = `/component/${pkg}/${file.replace('.md', '')}`
        // 将文件名转为首字母大写
        return { text, link }
      })
    })
  }
})



export default SidebarComponentArray