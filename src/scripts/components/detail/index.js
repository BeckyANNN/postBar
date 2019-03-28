import React, { Component } from "react";

import {Link,hashHistory} from "react-router";
import { Pagination,Icon,Affix,BackTop,Input, Button,Modal } from 'antd';
import Head from "../homeHead";
import User from "../../../assets/images/user.jpg";
import Comment from "../comment";
const TextArea = Input.TextArea;
import Base from "../base";
import $ from "jquery";
export default class Detail extends Base{
    constructor(props){
        super(props);
        this.state={
            isComment:false,//是否回复
            detail:{},
            comments:[],
            content:"",
            oIndex:""
        }
    }
    componentDidMount=()=>{
        this.getDetail();
    }
    //获取留言详情
    getDetail=()=>{
        this.fetchGet(api+detail+"/"+this.props.params.id,json=>{
            if(json.code==0){
                this.setState({
                    detail:json.data
                })
                if(json.data&&json.data.comments.length>0){
                    this.setState({
                        comments:json.data.comments
                    })
                }
            }
        })
    }
    //锚点设置
    scrollToAnchor = (anchorName) => {
        
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    
    //展开/收起回复
    handleExpend=(index,e)=>{
        if(e.target.innerText=="回复"){
            e.target.innerText = "收起回复";
            $(e.target).addClass("closeComment");
            let oDiv = document.getElementsByClassName("small-comment");
            for(let i=0;i<oDiv.length;i++){
                if($(oDiv[i]).attr("data-index")==index){
                    $(oDiv[i]).css({display:"block"})
                }
            }
        }else{
            e.target.innerText = "回复";
            $(e.target).removeClass("closeComment");
            let oDiv = document.getElementsByClassName("small-comment");
            for(let i=0;i<oDiv.length;i++){
                if($(oDiv[i]).attr("data-index")==index){
                    $(oDiv[i]).css({display:"none"})
                }
            }
            this.setState({
                content:'',
                oIndex:index
            })
        }
        
    }
    isComment=(index)=>{
        
        this.setState({
            isComment:!this.state.isComment,
            content:"",
            oIndex:index
        })
    }
    //帖子回复文字框
    handleTextArea=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    //帖子回复
    handleSend=(userId,id)=>{
        const {detail} = this.state;
        let data={
            toUserId:detail.userId,
            content:this.state.content,
            topicId:detail.id,
            fatherCommentId:id
        }
        this.fetchPost(api+comment,data,json=>{
            if(json.code==0){
                this.setState({
                    content:""
                },()=>{
                    this.getDetail();
                })
                
            }else{
                Modal.error({
                    title:"失败",
                    content:json.msg||"服务器错误，请联系管理员"
                })
            }
        })
    }
    //跳转到个人列表
    handleList=(id)=>{
        if(sessionStorage.token){
            hashHistory.push("list/"+id)
        }else{
            hashHistory.push('/login');
        }
    }
    render(){
        const {isComment,detail,comments,oIndex} = this.state;
        return(
            <div className="detail wrap1">
                <Head/>
                <div className="content">
                    <div className="p_thread" id="thread_theme_5">
                        <div className="l_thread_info">
                            <ul className="l_posts_num">
                                <li className="l_reply_num">
                                    <span className="red" style={{marginRight:3}}>{comments.length}</span>回复
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <Affix>
                        <div className='title'>
                            <p>{detail.title}</p>
                            <div className="titleBtn">
                                {/* <span className="lzonly_cntn">只看楼主</span> */}
                                <span className="j_quick_reply" onClick={()=>this.scrollToAnchor("comment")}>回复</span>
                            </div>
                        </div> 
                    </Affix>
                    <div className="infoList">
                        <div className="listItem">
                            <div className="d_author">    				
                                <div className="louzhubiaoshi_wrap">
                                    <div className="louzhubiaoshi">
                                        <a href="#"></a>
                                    </div>
                                </div>			
                                <ul className="p_author">
                                    <li className="icon">
                                        <div className="icon_relative j_user_card">
                                            <a href="javascript:;" className="p_author_face " onClick={()=>this.handleList(detail.authorId)}>
                                                <img className="" src={detail.authorAvatar}/>
                                            </a>
                            
                                        </div>
                                    </li>
                                    <li className="d_nameplate"></li>
                                    <li className="d_name">
                                        <a className="p_author_name j_user_card" href="javascript:;" target="_blank">{detail.authorName}</a>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div className="itemRight">
                                <div className="d_post_content" >{detail.title}</div>
                                <div className="core_reply">
                                    <div className="core_reply_tail ">
                                        <ul className="p_reply">
                                            <li>
                                                <span>1楼</span>
                                            </li>
                                            <li>
                                                <span>{this.changeTime(detail.createTime)}</span>
                                            </li>
                                            <li>
                                                <a href="javascript:;" className="p_reply_first" onClick={()=>this.scrollToAnchor("comment")}>回复</a>
                                            </li>
                                        </ul>
                                    
                                    </div>
                                </div>
                            </div>    
                        </div>
                        {
                            comments.map((item,index)=>{
                                return(
                                    <div className="listItem" key={index}>
                                        <div className="d_author"> 
                                            <div className="louzhubiaoshi_wrap" style={{display:item.authorName==detail.authorName?"block":"none"}}>
                                                <div className="louzhubiaoshi">
                                                    <a href="#"></a>
                                                </div>
                                            </div>	   				
                                            <ul className="p_author">
                                                <li className="icon">
                                                    <div className="icon_relative j_user_card">
                                                        <a className="p_author_face " href="javascript:;" onClick={()=>this.handleList(item.userId)}>
                                                            <img className="" src={item.authorAvatar}/>
                                                        </a>
                                        
                                                    </div>
                                                </li>
                                                <li className="d_nameplate"></li>
                                                <li className="d_name">
                                                    <a className="p_author_name j_user_card" href="#" target="_blank">{item.authorName}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="itemRight">
                                            <div className="d_post_content" >{item.content}</div>
                                                <div className="core_reply">
                                                    <div className="core_reply_tail ">
                                                        <ul className="p_reply">
                                                            <li>
                                                                <span>{index+2}楼</span>
                                                            </li>
                                                            <li>
                                                                <span>{this.changeTime(item.createTime)}</span>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:;" className="p_reply_first" onClick={(e)=>this.handleExpend(index,e)}>{item.sunComment&&item.sunComment.length>0?"收起回复":"回复"}</a>
                                                            </li>
                                                        </ul>
                                                        
                                                    </div>
                                                    <div className="small-comment" style={{display:item.sunComment&&item.sunComment.length>0?"block":"none"}} data-index={index}>
                                                        {item.sunComment&&item.sunComment.length>0?<ul className="j_lzl_m_w">
                                                            {
                                                                item.sunComment.map((i,d)=>{
                                                                    return(
                                                                        <li className="lzl_single_post" key={index+i}>
                                                                            <a target="_blank" className="j_user_card" href="#">
                                                                                <img src={i.authorAvatar}/>
                                                                            </a>
                                                                            <div className="lzl_cnt">
                                                                                <a className="at" target="_blank" href="#">{i.authorName}</a>:
                                                                                <span className="lzl_content_main">
                                                                                {i.content}
                                                                                </span>
                                                                                <div className="lzl_content_reply">
                                                                                    <span className="lzl_time">{this.changeTime(i.createTime)}</span>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                            
                                                            <li className="lzl_li_pager">
                                                                <span className="btn-small" onClick={()=>this.isComment(index)}>我也说一句</span>
                                                            </li>
                                                        </ul>:<ul className="j_lzl_m_w">
                                                            <li className="lzl_li_pager">
                                                                <span className="btn-small" onClick={()=>this.isComment(index)}>我也说一句</span>
                                                            </li>
                                                        </ul>}
                                                        <div className="small-comment-detail" style={{display:(isComment&&oIndex==index)?"block":"none"}}>
                                                            <TextArea onChange={this.handleTextArea} value={this.state.content}/>
                                                            <span className="send" onClick={()=>this.handleSend(item.userId,item.id)}>发表</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>    
                                        </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="p_thread" id="thread_theme_5">
                        <div className="l_thread_info">
                            <ul className="l_posts_num">
                                <li className="l_reply_num">
                                    <span className="red" style={{marginRight:3}}>{comments.length}</span>回复
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <Comment type='1' authorId={detail.authorId} topicId={detail.id} getDetail={this.getDetail}/>
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