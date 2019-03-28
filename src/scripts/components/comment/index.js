import React, { Component } from "react";

import {Link,hashHistory} from "react-router";
import { Pagination,Input,Affix,Button,BackTop, Icon,Modal,Select } from 'antd';
import axios from "axios";
import Base from "../base";
const TextArea = Input.TextArea;
const Option = Select.Option;
export default class Comment extends Base{
    constructor(props){
        super(props);
        this.state={
            title:"",
            content:""
        }
    }
    //标题
    handleTitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    //内容
    handleContent=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    //发表
    handleSent=()=>{
        if(sessionStorage.token){
            if(this.state.title&&this.state.content){
                if(this.props.type==0){
                    this.fetchPost(api+addTopic,{
                        title:this.state.title,
                        content:this.state.content,
                        type:this.props.tabs
                    },json=>{
                        if(json.code==0){
                            this.setState({
                                title:"",
                                content:""
                            })
                            Modal.success({
                                title:"成功",
                                content:"添加成功"
                            })
                            this.props.getList();
                        }else{
                            Modal.error({
                                title:"失败",
                                content:json.msg||"服务器错误，请联系管理员"
                            })
                        }
                    })
                }
            }else{
                if(this.props.topicId){
                    this.fetchPost(api+comment,{
                        toUserId:this.props.authorId,
                        content:this.state.content,
                        topicId:this.props.topicId
                    },json=>{
                        if(json.code==0){
                            Modal.success({
                                title:"成功",
                                content:"评论成功"
                            })
                            this.setState({
                                content:""
                            })
                            this.props.getDetail()
                        }else{
                            Modal.error({
                                title:"失败",
                                content:json.msg||"服务器错误，请联系管理员"
                            })
                        }
                    })
                }
            }
        }else{
            hashHistory.push('/login');
        }
    }
    //文章类别
    handleType=()=>{

    }
    render(){
        return(
            <div className='foot' style={{padding:this.props.type=='1'?"20px 0 26px 90px":"20px 0 26px 20px"}} id="comment">
                    <div className="poster_head_text">
                        <a className="add_thread_btn post_head_btn cur" title="发表新贴" href="javascript:;"><span className="post_head_btn_icon post_head_btn_icon_post"></span>{this.props.type=="0"?"发表新贴":"发表回复"}</a>
                    </div>
                    <div className="poster_body">
                        {this.props.type==1||<div className="title_container">
                            <div className="j_title_wrap">
                                <Input className="editor_textfield" autoComplete="off" placeholder="请填写标题" onChange={this.handleTitle} value={this.state.title}/>
                                {/* <Select onChange={this.handleType} style>
                                    <Option></Option>
                                    <Option></Option>
                                    <Option></Option>
                                </Select> */}
                            </div>
                        </div>}
                        <div className="poster_component">
                            <div className="old_style_wrapper">
                                <div className="edui-container" style={{width: "720px"}}>
                                    <div className="edui-toolbar">
                                        <div className="edui-dialog-container"></div>
                                    </div>
                                    <div className="edui-editor-body">
                                        <TextArea onChange={this.handleContent} value={this.state.content}/>
                                    </div>
                                    <div className="edui-editor-bottom"></div>
                                    <div className="edui-editor-msg"></div>
                                </div>
                            </div>
                        </div>
                        <div className="poster_error j_error"></div>
                    </div>
                    <div className="poster_component editor_bottom_panel">
                        <div className="j_floating">
                            <Button type="primary" size="large" onClick={this.handleSent}>发表</Button>
                            <span className="poster_posting_status j_posting_status"></span>
                            <div className="poster_draft_status j_draft" style={{display: "none"}}>
                                <span className="j_content"></span>
                                <span title="清空草稿" className="poster_draft_delete j_clear"></span>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}