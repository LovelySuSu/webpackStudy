// function getComponent() {
//     return import(/* webpackChunkName:'lodash' */'lodash').then(( _ ) => {
//         var element = document.createElement('div')
//         element.innerHTML =_.join(['a','b','c'],'***')
//         return element
//     })
// }
// getComponent().then(element => document.body.appendChild(element))

import _ from 'lodash'

var element = document.createElement('div')
element.innerHTML =_.join(['a','b','c'],'***')
document.body.appendChild(element)

