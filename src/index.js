console.log('Hello Dingding')

if('serviceWorker' in navigator) {
    window.addEventListener('load',() => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(register => {
                console.log('success')
            })
            .catch(e => console.log(e))
    })
}