import _ from 'lodash'

var element = document.createElement('div')
element.innerHTML =_.join(['a','b','c'],'***')
document.body.appendChild(element)
// document.addEventListener('click',() =>{
//     var element = document.createElement('div')
//     element.innerHTML ='dingding'
//     document.body.appendChild(element)
// })


