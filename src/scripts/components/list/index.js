import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Icon,Affix,BackTop,Input, Button } from 'antd';
import Head from "../homeHead";
import User from "../../../assets/images/user.jpg";
import Timg from "../../../assets/images/timg.jpg";
import Banner from "../../../assets/images/banner.jpg";
import Comment from "../comment";
import Base from "../base";
import Empty from "../../../assets/images/empty.svg";

const TextArea = Input.TextArea;
export default class List extends Base{
    constructor(props){
        super(props);
        this.state={
            name:"",
            nickName:"",
            avatar:"",
            list:[],//全部贴子
        }
    }
    componentDidMount=()=>{
        this.getInfo();
        this.getList();
    }
    //获取个人信息
    getInfo=()=>{
        this.fetchGet(api+info,json=>{
            if(json.code==0){
                this.setState({
                    name:json.data.username,
                    nickName:json.data.nickName,
                    sex:json.data.sex,
                    avatar:json.data.avatar
                })
            }
        })
    }
    
    //查询我的贴子列表
    getList=()=>{
        this.fetchGet(api+topicList,json=>{
            console.log(json)
            if(json.code==0){
                if(json.data&&json.data.length>0){
                    this.setState({
                        list:json.data
                    })
                }else{
                    this.setState({
                        list:[]
                    })
                }
            }else{
                Modal.error({
                    title:"失败",
                    content:json.msg||"服务器错误，请联系管理员"
                })
            }
        })
    }
    
    render(){
        const {avatar,nickName,list} = this.state;
        return(
            <div className="detail wrap1">
                <div className='head'>
                    <div className="banner">
                        <img src={Banner} onClick={this.reload}/>
                    </div>
                    {nickName==sessionStorage.nickName?<Link to='shezhi' className="editInfo">编辑资料</Link>:null}
                    <div className='theme'>
                        <div className='card-left'>
                            <div className='card-head'>
                                <a href="javascript:;">
                                    <img src={avatar}/>
                                </a>
                            </div>
                            <div className='card-title'>
                                <span className="card_title_fname" >{nickName}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {list.length>0?<div className="infoList">
                    {
                        list.map((item,index)=>{
                            return(
                            <dl key={index}>
                                <dt><img src={item}/></dt>     
                                <dd>
                                    <Link to={"/detail/"+item.id}>{item.title}</Link>
                                    <p>{item.content}</p>
                                </dd>
                            </dl>
                            )
                        })
                    }
                        
                        
                    </div>:<div className="empty">
                            <img src={Empty}/>
                            <p>暂无数据</p>
                    </div>}
                   
                </div>
                {/* 回到顶部 */}
                <BackTop>
                    <div className="toTop">
                        <Icon type='up'/>
                    </div>
                </BackTop>
            </div>
        )
    }
}