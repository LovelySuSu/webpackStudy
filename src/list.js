import React,{ Component } from 'react'
import ReactDom from 'react-dom'
class List extends Component {
    render() {
        return <div>
            <div>this is list</div>
        </div>
    }
}

ReactDom.render(<List/>,document.getElementById('root'))