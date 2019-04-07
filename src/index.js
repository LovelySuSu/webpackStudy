import "@babel/polyfill"
import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import Child from "dingding"
class App extends Component {
    render() {
        return <div>
            <div>App</div>
            <Child/>
        </div>
    }
}

ReactDom.render(<App/>,document.getElementById('root'))