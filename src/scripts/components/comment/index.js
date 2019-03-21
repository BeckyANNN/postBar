import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Input,Affix,Button,BackTop, Icon } from 'antd';
const TextArea = Input.TextArea;

export default class Comment extends Component{

    render(){
        return(
            <div className='foot' style={{padding:this.props.type=='1'?"20px 0 26px 90px":"20px 0 26px 20px"}} id="comment">
                    <div className="poster_head_text">
                        <a className="add_thread_btn post_head_btn cur" title="发表新贴" href="javascript:;"><span className="post_head_btn_icon post_head_btn_icon_post"></span>{this.props.type=="0"?"发表新贴":"发表回复"}</a>
                        {this.props.type=="1"||<a className="add_vote_btn post_head_btn" title="发起投票" target="_blank" href="#"><span className="post_head_btn_icon post_head_btn_icon_vote"></span>发起投票</a>}
                    </div>
                    <div className="poster_body">
                        {this.props.type==1||<div className="title_container">
                            <div className="j_title_wrap">
                                <Input className="editor_textfield" autoComplete="off" placeholder="请填写标题"/>
                            </div>
                        </div>}
                        <div className="poster_component">
                            <div className="old_style_wrapper">
                                <div className="edui-container" style={{width: "720px"}}>
                                    <div className="edui-toolbar">
                                        <div className="edui-dialog-container"></div>
                                    </div>
                                    <div className="edui-editor-body">
                                        <TextArea />
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
                            <Button type="primary" size="large">发表</Button>
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