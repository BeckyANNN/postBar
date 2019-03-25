import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Icon,Affix,BackTop,Input, Button } from 'antd';
import Head from "../homeHead";
import User from "../../../assets/images/user.jpg";
import Comment from "../comment";
const TextArea = Input.TextArea;
import Base from "../base";
export default class Detail extends Base{
    constructor(props){
        super(props);
        this.state={
            flag:true,//是否展示回复列表
            isComment:false,//是否回复
        }
    }
    componentDidMount=()=>{
        console.log(this.props.params.id)
        this.getDetail();
    }
    //获取贴子详情
    getDetail=()=>{
        this.fetchGet(api+detail+"/"+this.props.params.id,json=>{
            console.log(json)
        })
    }
    //锚点设置
    scrollToAnchor = (anchorName) => {
        
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    //收起回复
    handleComment=()=>{
        this.setState({
            flag:false
        })
    }
    isComment=()=>{
        this.setState({
            isComment:!this.state.isComment
        })
    }
    render(){
        const {isComment,flag} = this.state;
        return(
            <div className="detail wrap1">
                <Head/>
                <div className="content">
                    <div className="p_thread" id="thread_theme_5">
                        <div className="l_thread_info">
                            <ul className="l_posts_num">
                                <li className="l_reply_num">
                                    <span className="red" style={{marginRight:3}}>6</span>回复贴
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <Affix>
                        <div className='title'>
                            <p>大学生创新创业与大学生小本创业项目有什么不同呢？</p>
                            <div className="titleBtn">
                                <span className="lzonly_cntn">只看楼主</span>
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
                                            <a target="_blank" className="p_author_face " href="#">
                                                <img className="" src={User}/>
                                            </a>
                            
                                        </div>
                                    </li>
                                    <li className="d_nameplate"></li>
                                    <li className="d_name">
                                        <a className="p_author_name j_user_card" href="#" target="_blank">罗强哥</a>
                                    </li>
                                    {/* <li className="l_badge" style={{display:"block"}}>
                                        <div className="p_badge">
                                            <a href="#" target="_blank" className="user_badge d_badge_bright d_badge_icon1" title="本吧头衔2级，经验值5，点击进入等级头衔说明页">
                                                <div className="d_badge_title ">团委大大</div>
                                                <div className="d_badge_lv">2</div>
                                            </a>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="itemRight">
                                <div className="d_post_content" >大学生创新创业与大学生小本创业项目有什么不同呢？</div>
                                <div className="core_reply">
                                    <div className="core_reply_tail ">
                                        <ul className="p_reply">
                                            <li>
                                                <span>1楼</span>
                                            </li>
                                            <li>
                                                <span>2017-10-25 11:39</span>
                                            </li>
                                            <li>
                                                <a href="javascript:;" className="p_reply_first" onClick={()=>this.scrollToAnchor("comment")}>回复</a>
                                            </li>
                                        </ul>
                                    
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="listItem">
                            <div className="d_author">    				
                                <ul className="p_author">
                                    <li className="icon">
                                        <div className="icon_relative j_user_card">
                                            <a target="_blank" className="p_author_face " href="#">
                                                <img className="" src={User}/>
                                            </a>
                            
                                        </div>
                                    </li>
                                    <li className="d_nameplate"></li>
                                    <li className="d_name">
                                        <a className="p_author_name j_user_card" href="#" target="_blank">罗强哥</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="itemRight">
                                <div className="d_post_content" >大学生创新创业与大学生小本创业项目有什么不同呢？</div>
                                <div className="core_reply">
                                    <div className="core_reply_tail ">
                                        <ul className="p_reply">
                                            <li>
                                                <span>1楼</span>
                                            </li>
                                            <li>
                                                <span>2017-10-25 11:39</span>
                                            </li>
                                            {this.state.flag?<li>
                                                <a href="javascript:;" className="p_reply_first closeComment" onClick={this.handleComment}>收起回复</a>
                                            </li>:
                                            <li>
                                                <a href="javascript:;" className="p_reply_first" onClick={()=>{this.setState({flag:true})}}>回复</a>
                                            </li>}
                                        </ul>
                                        
                                    </div>
                                    <div className="small-comment" style={{display:flag?"block":"none"}}>
                                        <ul className="j_lzl_m_w">
                                            <li className="lzl_single_post" >
                                                <a target="_blank" className="j_user_card" href="#">
                                                    <img src="http://tb.himg.baidu.com/sys/portrait/item/afa64b4c5fe4b98ce6a1937960"/>
                                                </a>
                                                <div className="lzl_cnt">
                                                    <a className="at" target="_blank" href="#">KL-乌恒</a>:
                                                    <span className="lzl_content_main">
                                                    借楼，亲，竞选双一流学科，首先要有博士点，而且是一级学科才有资格参选。入围的双非院校，都是各自学科必须排名全国前三，谁叫成都理工的地质和西南石油的专业冷门，在全国没什么竞争对手呢？
                                                    </span>
                                                    <div className="lzl_content_reply">
                                                        <span className="lzl_time">2017-9-23&nbsp;10:04</span>
                                                        <a href="#" className="lzl_s_r">回复</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lzl_li_pager">
                                                <span className="btn-small" onClick={this.isComment}>我也说一句</span>
                                            </li>
                                        </ul>
                                        <div className="small-comment-detail" style={{display:isComment?"block":"none"}}>
                                            <TextArea/>
                                            <span className="send">发表</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="p_thread" id="thread_theme_5">
                        <div className="l_thread_info">
                            <ul className="l_posts_num">
                                <li className="l_reply_num">
                                    <span className="red" style={{marginRight:3}}>6</span>回复贴
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <Comment type='1'/>
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