function getComponent() {
    return import('lodash').then(( _ ) => {
        var element = document.createElement('div')
        element.innerHTML =_.join(['a','b','c'],'***')
        return element
    })
}
getComponent().then(element => document.body.appendChild(element))