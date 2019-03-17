document.addEventListener('click',() => {
    import(/* webpackPrefetch: true */'./handleClick.js').then(({default: func}) => {
        func()
    })
})
// document.addEventListener('click',() =>{
//     var element = document.createElement('div')
//     element.innerHTML ='dingding'
//     document.body.appendChild(element)
// })


