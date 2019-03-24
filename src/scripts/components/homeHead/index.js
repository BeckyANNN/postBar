import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button} from "antd";
import {Link} from "react-router";
import Base from "../base";
const Search = Input.Search;
class homeHead extends Base{
    constructor(props){
        super(props);
        this.state={
        }
    }
   
    //重新加载
    reload=()=>{
        location.reload();
    }
    //退出登录
    exit=()=>{
        sessionStorage.clear();
        location.reload();
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        
       
        return(
            <div className='head'>
                {sessionStorage.token?<div className='login'>
                    <Link to="info">{sessionStorage.nickName}</Link>
                    <span onClick={this.exit} style={{marginLeft:16}}>退出登录</span>
                </div>:<div className='login'>
                    <span><Link to="login" style={{color:"#333"}}>登录</Link></span>
                    <span><Link to="register" style={{color:"#333"}}>注册</Link></span>
                </div>}
                <div className="banner">
                    <img src={Banner} onClick={this.reload}/>
                </div>
                
                <div className="search">
                    <Search placeholder="贴子关键字" style={{lineHeight:"46px",float:"right",marginRight:16,width:"28%"}}/>
                </div>
            </div>
        )
    }
}
export default Form.create()(homeHead);