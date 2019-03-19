import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Input,Affix,Button } from 'antd';
import Aside from "../aside";
import HomeHead from "../homeHead";
const TextArea = Input.TextArea;

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            top: 5,
        }
    }
    render(){
        return(
            <div className='wrap1'>
                <HomeHead/>
                <div className="content">
                    <div className="list">
                        <ul>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="/p/5974503384" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="#" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="/p/5974503384" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="/p/5974503384" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="/p/5974503384" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="#" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="item-left">
                                        <span className="threadlist_rep_num">280</span>
                                    </div>
                                    <div className="item-right">
                                        <div className="threadlist_lz">
                                            <div className="threadlist_title">
                                                <a rel="noreferrer" href="/p/5974503384" title="有考本校研究生的吗？" target="_blank" className="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author" title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span className="frs-author-name-wrap">
                                                        <a rel="noreferrer" className="frs-author-name j_user_card " href="#" target="_blank">学姐有资...</a>
                                                        </span>
                                                        <span className="icon_wrap  icon_wrap_theme1 frs_bright_icons "></span>    
                                                    </span>
                                                <span className="pull-right is_show_create_time" title="创建时间">2018-12</span>
                                            </div>
                                        </div>
                                        <div className="threadlist_detail">
                                            <div className="threadlist_text">
                                                <div className="threadlist_abs">有考本校研究生的吗？</div>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="j_replyer" title="最后回复人: 颜负牧rg">
                                                    <i className="icon_replyer"></i>
                                                    <a rel="noreferrer" className="frs-author-name j_user_card " target="_blank">颜负牧rg</a>        
                                                </span>
                                                <span className="threadlist_reply_date" title="最后回复时间">17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                        <Pagination defaultCurrent={1} total={50} className='pagination'/>
                        <div className="th_footer_bright">
                            <div className="th_footer_l">共有主题数
                                <span className="red_text">166065</span>个，贴子数
                                <span className="red_text">5208132</span>篇&nbsp;
                                <a rel="noreferrer" className="fans_name" href="#" target="_blank">Cuitor</a>数
                                <span className="red_text">163430</span>
                            </div>
                        </div>
                    </div>
                   <Aside/>
                                       
                </div>
                <div className='foot'>
                    <div className="poster_head_text">
                        <a className="add_thread_btn post_head_btn cur" title="发表新贴" href="javascript:;"><span className="post_head_btn_icon post_head_btn_icon_post"></span>发表新贴</a>
                        <a className="add_vote_btn post_head_btn" title="发起投票" target="_blank" href="#"><span className="post_head_btn_icon post_head_btn_icon_vote"></span>发起投票</a>
                    </div>
                    <div className="poster_body">
                        <div className="title_container">
                            <div className="j_title_wrap">
                                <Input className="editor_textfield" autoComplete="off" placeholder="请填写标题"/>
                            </div>
                        </div>
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
            </div>
               
        )
    }
}