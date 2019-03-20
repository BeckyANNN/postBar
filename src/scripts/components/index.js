import React,{Component} from "react"
import {render} from "react-dom"
import {hashHistory,Router,Route,IndexRedirect,Redirect} from "react-router"

import Home from "./home"
import App from "./app"
import Detail from "./detail";
import Register from "./register";
import Info from "./info";
export default class Layout extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                {/* <Redirect from="/reactapp/dist" to="/" /> */}
                <Route path="/" component={App}>
                    <IndexRedirect to="/home"/>
                    <Route path="home" component={Home}/>
                    <Route path="detail" component={Detail}/>
                    <Route path="register" component={Register}/>
                    <Route path="info" component={Info}/>
                </Route>
            </Router>
        )
    }
}