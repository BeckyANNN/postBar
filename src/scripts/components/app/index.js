import React,{Component} from "react"


import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component{
    
   
    render(){
        return(
            <div className="moveIn app"
                    key={this.props.location.pathname}
                     style={{position:"absolute", width: "100%"}}
                >
                {this.props.children}
            </div>  
        )
    }
}