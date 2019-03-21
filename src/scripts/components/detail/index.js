import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Icon,Affix,BackTop,Input, Button } from 'antd';
import Head from "../homeHead";
import User from "../../../assets/images/user.jpg";
import Comment from "../comment";
const TextArea = Input.TextArea;
export default class Detail extends Component{
    //锚点设置
    scrollToAnchor = (anchorName) => {
        
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    render(){
        return(
            <div className="detail wrap1">
                <Head/>
                <div className="content">
                    <div className="p_thread" id="thread_theme_5">
                        <div className="l_thread_info">
                            <ul className="l_posts_num">
                                <li className="l_reply_num">
                                    <span className="red" style={{marginRight:3}}>6</span>回复贴，共<span className="red">1</span>页
                                </li>
                            </ul>
                            <div id="tofrs_up" className="tofrs_up">
                                <Link to="home" title="成都信息工程大学">&lt;&lt;返回成都信息工...吧</Link>
                            </div>
                        </div>
                        
                    </div>
                    <Affix>
                        <div className='title'>
                            <p>大学生创新创业与大学生小本创业项目有什么不同呢？</p>
                            <div className="titleBtn">
                                <span className="lzonly_cntn">只看楼主</span>
                                <span className="p_favthr_main">收藏</span>
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
                                    <li className="l_badge" style={{display:"block"}}>
                                        <div className="p_badge">
                                            <a href="#" target="_blank" className="user_badge d_badge_bright d_badge_icon1" title="本吧头衔2级，经验值5，点击进入等级头衔说明页">
                                                <div className="d_badge_title ">团委大大</div>
                                                <div className="d_badge_lv">2</div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="itemRight">
                                <div className="d_post_content" >大学生创新创业与大学生小本创业项目有什么不同呢？</div>
                                <div className="core_reply">
                                    <div className="core_reply_tail ">
                                        <ul className="p_reply">
                                            <li className="complaint"></li>
                                            <li>
                                                <span>1楼</span>
                                            </li>
                                            <li>
                                                <span>2017-10-25 11:39</span>
                                            </li>
                                            <li>
                                                <a href="#" className="p_reply_first" onClick={()=>this.scrollToAnchor("comment")}>回复</a>
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
                                    <li className="l_badge" style={{display:"block"}}>
                                        <div className="p_badge">
                                            <a href="#" target="_blank" className="user_badge d_badge_bright d_badge_icon1" title="本吧头衔2级，经验值5，点击进入等级头衔说明页">
                                                <div className="d_badge_title ">团委大大</div>
                                                <div className="d_badge_lv">2</div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="itemRight">
                                <div className="d_post_content" >大学生创新创业与大学生小本创业项目有什么不同呢？</div>
                                <div className="core_reply">
                                    <div className="core_reply_tail ">
                                        <ul className="p_reply">
                                            <li className="complaint"></li>
                                            <li>
                                                <span>1楼</span>
                                            </li>
                                            <li>
                                                <span>2017-10-25 11:39</span>
                                            </li>
                                            {/* <li>
                                                <a href="#" className="p_reply_first" onClick={this.handleComment}>回复</a>
                                            </li> */}
                                            <li>
                                                <a href="#" className="p_reply_first closeComment" onClick={this.handleComment}>收起回复</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="small-comment">
                                        <TextArea/>
                                        <span className="send">发表</span>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="p_thread" id="thread_theme_5">
                        <div className="l_thread_info">
                            <ul className="l_posts_num">
                                <li className="l_reply_num">
                                    <span className="red" style={{marginRight:3}}>6</span>回复贴，共<span className="red">1</span>页
                                </li>
                            </ul>
                            <div id="tofrs_up" className="tofrs_up">
                                <Link to="home" title="成都信息工程大学">&lt;&lt;返回成都信息工...吧</Link>
                            </div>
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