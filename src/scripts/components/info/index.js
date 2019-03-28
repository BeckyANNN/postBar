import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button,Radio,InputNumber } from "antd";
import {Link} from "react-router";
import User from "../../../assets/images/user3.jpg";
import Empty from "../../../assets/images/empty.svg";
import Base from "../base";
import $ from "jquery";
const RadioGroup = Radio.Group;
export default class Info extends Base{
    constructor(props){
        super(props);
        this.state={
            list:[],
            xiaoxi:[],
            flag:true,//留言：true,消息：false
        }
    }
    componentDidMount=()=>{
        this.getList();
        this.getInfoList();
    }
    //查询我的贴子列表
    getList=()=>{
        this.fetchGet(api+topicList,json=>{
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
    //查询我的消息列表
    getInfoList=()=>{
        this.fetchGet(api+xiaoxi,json=>{
            if(json.code==0){
                if(json.data&&json.data.length>0){
                    this.setState({
                        xiaoxi:json.data
                    })
                }else{
                    this.setState({
                        xiaoxi:[]
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
    //切换我的消息、贴子
    handleFix=(e)=>{
        //清空所有选中状态
        var activeList = document.getElementsByClassName("active");
        for(let i=0;i<activeList.length;i++){
            $(activeList[i]).removeClass("active");
        }
        //赋予当前点击的标签选中状态
        if(e.target.tagName=="A"){
            $(e.target).addClass("active");
            if(e.target.innerText=="我的留言"){
                this.setState({
                    flag:true
                })
            }else{
                this.setState({
                    flag:false
                })
            }
        }
    }
    render(){
        const {list,xiaoxi,flag} = this.state;
        return(
            <div className="info">
            {
                flag&&list.length>0?<div className="left">
                {
                    list.map((item,index)=>{
                        return(
                            <dl key={index}>
                                <dt>
                                    <Link to={"/detail/"+item.id} className="list">{item.title}</Link>
                                    <span>回复({item.commentNum-1})</span>
                                </dt>
                                <dd>{this.changeTime(item.createDate)}</dd>
                            </dl>
                        )
                    })
                }
                 
                </div>:(!flag&&xiaoxi.length>0)?<div className="left">
                    {
                        xiaoxi.map((item,index)=>{
                            return(
                                <div className="item" key={index}>
                                    <p className="author">{item.authorName}<span>{this.changeTime(item.createTime)}</span></p>
                                    <p>@提到我的留言：“&nbsp;<span>回复：{item.content}</span>&nbsp;” > 留言主题：{item.belongTopic}<Link to={"/detail/"+item.belongTopicId} className="reComment">回复</Link></p>
                                </div>
                            )
                        })
                    }
                     
                    </div>:<div className="empty">
                            <img src={Empty}/>
                            <p>暂无数据</p>
                    </div>
            }
               
                
                <div className="right">
                    <div className="right-head">
                        <span>个人信息</span>
                        <Link to="shezhi">[ 设置 ]</Link>
                    </div> 
                    <div className="right-center">
                        <dl>
                            <dt> <img src={User}/></dt>
                            <dd>
                                <p>逗比哈nice</p>
                                <p>男</p>
                            </dd>
                        </dl>
                       
                    </div>
                    <div className="right-footer" onClick={this.handleFix}>
                        {/* <Link to="list">首页</Link> */}
                        <a href="javascript:;" className="active">我的留言</a>
                        <a href="javascript:;">我的消息</a>
                    </div>
                </div>
            </div>
        )
    }
}