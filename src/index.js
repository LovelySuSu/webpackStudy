// async function getComponent() {
//     const {default: _} = await import(/* webpackChunkName:'lodash' */'lodash')
//     var element = document.createElement('div')
//     element.innerHTML =_.join(['a','b','c'],'***')
//     return element
// }
//
// document.addEventListener('click',() => {
//     getComponent().then(element => document.body.appendChild(element))
// })


import _ from 'lodash'

var element = document.createElement('div')
element.innerHTML =_.join(['a','b','c'],'***')
document.body.appendChild(element)

