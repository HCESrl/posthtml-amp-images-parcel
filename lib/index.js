'use strict'

module.exports = function () {
  return function posthtmlAmpImages (tree) {
    // your plugin
    tree.match({tag: 'amp-img'}, node => {
      console.log('found node ', node)
      let src = ''
      // get no script tag
      node.content.forEach(el => {
        if (el.tag && el.tag === 'noscript') {
          console.log('noscript ', el.content)
          // get underlying img tag
          el.content.forEach(subEl => {
            if (subEl.tag && subEl.tag === 'img') {
              console.log('img tag', subEl.attrs.src)
              src = subEl.attrs.src
            }
          })
        }
      })
      node.attrs.src = src
      return node
    })

    return tree
  }
}
