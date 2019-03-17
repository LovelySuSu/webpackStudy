document.addEventListener('click',() => {
    import('./handleClick.js').then(({default: func}) => {
        func()
    })
})
// document.addEventListener('click',() =>{
//     var element = document.createElement('div')
//     element.innerHTML ='dingding'
//     document.body.appendChild(element)
// })


