import React,{Component} from "react"
import {render} from "react-dom"
import {hashHistory,Router,Route,IndexRedirect,Redirect} from "react-router"

import Home from "./home"
import App from "./app"
import Detail from "./detail";
import Register from "./register";
import Login from "./login";
import Info from "./info";
import Shezhi from "./shezhi";
import List from "./list";
export default class Layout extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                {/* <Redirect from="/reactapp/dist" to="/" /> */}
                <Route path="/" component={App}>
                    <IndexRedirect to="/home"/>
                    <Route path="home" component={Home}/>
                    <Route path="detail/:id" component={Detail}/>
                    <Route path="register" component={Register}/>
                    <Route path="login" component={Login}/>
                    <Route path="info" component={Info}/>
                    <Route path="shezhi" component={Shezhi}/>
                    <Route path="list" component={List}/>
                </Route>
            </Router>
        )
    }
}