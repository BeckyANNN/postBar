import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Input,Affix,Button,BackTop, Icon,Modal,Tabs,Spin } from 'antd';
import HomeHead from "../homeHead";
import Comment from "../comment";
import axios from "axios";
import "../../../assets/js/api.js";
const TextArea = Input.TextArea;
const TabPane = Tabs.TabPane;
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            top: 5,
            tabs:"看帖",
            pageSize:2,
            pageNum:1,//当前页
            list:[],//贴子列表
            total:0,
            loading:false
        }
    }
    componentDidMount=()=>{
        this.getList();
    }
    //获取贴子列表
    getList=()=>{
        const {pageNum,pageSize,tabs} = this.state;
        this.setState({
            loading:true
        })
        axios.get(api+topicList+"?page="+pageNum+"&size="+pageSize+"&type="+tabs).then(res=>{
            this.setState({
                loading:false
            })
              console.log(res)
               if(res.data&&res.status==200){
                   if(res.data.data){
                        this.setState({
                            list:res.data.data,
                            
                        })
                   }else{
                        this.setState({
                            list:[],
                            
                        })
                   }
                   
                   if(res.data.pageDate){
                       this.setState({
                            pageNum:res.data.pageDate.curPage,
                            pageSize:res.data.pageDate.curSize,
                            total:res.data.pageDate.count,
                       })
                   }
               }else{
                   Modal.error({
                       title:"失败",
                       content:res.data.msg||"服务器错误，请联系管理员"
                   })
               }
        })
        
    }
    
    //切换看帖和精品
    handleTabs=(value)=>{
        console.log(value)
        this.setState({
            tabs:value
        },()=>{
            this.getList();
        })
    }
    //将时间戳转换为时间
    changeTime=(date)=>{
        let timestamp4 = new Date(date);//直接用 new Date(时间戳) 格式转化获得当前时间
        let time = timestamp4.toLocaleDateString().replace(/\//g, "-")
        return time;
    }
    //分页
    handlePagiantion=(value)=>{
        console.log(value)
    }
    render(){
        const {list,total} = this.state;
        console.log(total)
        return(
            <div className='wrap1'>
                <HomeHead/>
                <div className="content">
                    <Tabs defaultActiveKey="看帖" onChange={this.handleTabs}>
                                            
                        <TabPane tab="看帖" key="看帖">
                            <div className="list">
                                <ul>
                                    {
                                        list.map((item,index)=>{
                                            return(
                                                <li key={index}>
                                                    <div className="item">
                                                        <div className="item-left">
                                                            <span className="threadlist_rep_num">{item.commentNum}</span>
                                                        </div>
                                                        <div className="item-right">
                                                            <div className="threadlist_lz">
                                                                <div className="threadlist_title">
                                                                    <Link to="detail" title={item.title} target="_blank" className="j_th_tit ">{item.title}</Link>
                                                                </div>
                                                                <div className="threadlist_author">
                                                                    <span className="tb_icon_author">
                                                                        <i className="icon_author"></i>
                                                                        <span className="frs-author-name-wrap">
                                                                            <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">{item.authorName}</a>
                                                                            </span>
                                                                            <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                                        </span>
                                                                    <span className="pull-right is_show_create_time" title="创建时间" style={{marginLeft:"8px"}}>{this.changeTime(item.createDate)}</span>
                                                                </div>
                                                            </div>
                                                            <div className="threadlist_detail" style={{display:item.lastAnswerName?"block":"none"}}>
                                                                <div className="threadlist_text">
                                                                    <div className="threadlist_abs">{item.title}</div>
                                                                </div>
                                                                <div className="threadlist_author">
                                                                    <span className="j_replyer">
                                                                        <i className="icon_replyer"></i>
                                                                        <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">{item.lastAnswerName}</a>        
                                                                    </span>
                                                                    <span className="threadlist_reply_date" title="最后回复时间">{item.lastCommentTime}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <Pagination current={this.state.pageNum} pageSize={this.state.pageSize} total={total} className='pagination' onChange={this.handlePagiantion}/>
                                <div className="th_footer_bright">
                                    <div className="th_footer_l">贴子数
                                        <span className="red_text">5208132</span>篇&nbsp;
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="精品" key="精品">
                            <div className="list">
                            <ul>
                            {
                                list.map((item,index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="item">
                                                <div className="item-left">
                                                    <span className="threadlist_rep_num">{item.commentNum}</span>
                                                </div>
                                                <div className="item-right">
                                                    <div className="threadlist_lz">
                                                        <div className="threadlist_title">
                                                            <Link to="detail" title={item.title} target="_blank" className="j_th_tit ">{item.title}</Link>
                                                        </div>
                                                        <div className="threadlist_author">
                                                            <span className="tb_icon_author">
                                                                <i className="icon_author"></i>
                                                                <span className="frs-author-name-wrap">
                                                                    <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">{item.authorName}</a>
                                                                    </span>
                                                                    <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                                </span>
                                                            <span className="pull-right is_show_create_time" title="创建时间" style={{marginLeft:"8px"}}>{this.changeTime(item.createDate)}</span>
                                                        </div>
                                                    </div>
                                                    <div className="threadlist_detail" style={{display:item.lastAnswerName?"block":"none"}}>
                                                        <div className="threadlist_text">
                                                            <div className="threadlist_abs">{item.title}</div>
                                                        </div>
                                                        <div className="threadlist_author">
                                                            <span className="j_replyer">
                                                                <i className="icon_replyer"></i>
                                                                <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">{item.lastAnswerName}</a>        
                                                            </span>
                                                            <span className="threadlist_reply_date" title="最后回复时间">{item.lastCommentTime}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                            </div>
                        </TabPane>
                    </Tabs>
                              
                </div>
                <Comment type="0" tabs={this.state.tabs} getList={this.getList}/>
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
