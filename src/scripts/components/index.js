import React,{Component} from "react"
import {render} from "react-dom"
import {hashHistory,Router,Route,IndexRedirect,Redirect} from "react-router"

import Home from "./home"
import App from "./app"

export default class Layout extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                {/* <Redirect from="/reactapp/dist" to="/" /> */}
                <Route path="/" component={App}>
                    <IndexRedirect to="/home"/>
                    <Route path="home" component={Home}/>
                    
                </Route>
            </Router>
        )
    }
}