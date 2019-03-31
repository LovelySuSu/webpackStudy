import "@babel/polyfill"
import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,Route } from 'react-router-dom'
import List from "./List";
import Home from "./Home";
class App extends Component {
    render() {
        return <BrowserRouter>
            <Route path={'/'} exact component={ Home }/>
            <Route path={'/list'} component={ List }/>
        </BrowserRouter>
    }
}

ReactDom.render(<App/>,document.getElementById('root'))