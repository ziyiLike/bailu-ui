import fs from 'fs'


let SidebarComponentArray: any[] = []

fs.readdirSync('./docs/component').map(pkg => {
  if (fs.statSync(`./docs/component/${pkg}`).isDirectory()) {
    SidebarComponentArray.push({
      text: pkg.split('-')[1],
      collapsed: false,
      items: fs.readdirSync(`./docs/component/${pkg}`).map(file => {
        const text = file.replace('.md', '').split('-')[1]
        const link = `/component/${pkg}/${file.replace('.md', '')}`
        return { text, link }
      })
    })
  }
})



export default SidebarComponentArray