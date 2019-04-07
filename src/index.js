import "@babel/polyfill"
import React,{ Component } from 'react'
import ReactDom from 'react-dom'
class App extends Component {
    render() {
        return <div>
            <div>this is app</div>
        </div>
    }
}

ReactDom.render(<App/>,document.getElementById('root'))