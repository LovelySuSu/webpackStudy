function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div')
        element.innerHTML =_.join(['a','b','c'],'***')
        return element
    })
}
getComponent().then(element => document.appendChild(element))