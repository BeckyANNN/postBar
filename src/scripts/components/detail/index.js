import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Icon,Affix,BackTop,Input, Button } from 'antd';
import Head from "../homeHead";
import User from "../../../assets/images/user.jpg";
import Comment from "../comment";
const TextArea = Input.TextArea;
export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:true,//是否回复
        }
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
                                            {this.state.flag?<li>
                                                <a href="javascript:;" className="p_reply_first closeComment" onClick={this.handleComment}>收起回复</a>
                                            </li>:
                                            <li>
                                                <a href="javascript:;" className="p_reply_first" onClick={()=>{this.setState({flag:true})}}>回复</a>
                                            </li>}
                                        </ul>
                                        
                                    </div>
                                    <div className="small-comment">
                                        <ul className="j_lzl_m_w">
                                            <li className="lzl_single_post" >
                                                <a target="_blank" className="j_user_card" href="#">
                                                    <img src="http://tb.himg.baidu.com/sys/portrait/item/afa64b4c5fe4b98ce6a1937960"/>
                                                </a>
                                                <div className="lzl_cnt">
                                                    <a className="at j_user_card " target="_blank" href="#">KL-乌恒<img src="" className="nicknameEmoji" style={{width:13,height:"13px"}}/></a>:
                                                    <span className="lzl_content_main">
                                                    借楼，亲，竞选双一流学科，首先要有博士点，而且是一级学科才有资格参选。入围的双非院校，都是各自学科必须排名全国前三，谁叫成都理工的地质和西南石油的专业冷门，在全国没什么竞争对手呢？
                                                    </span>
                                                    <div className="lzl_content_reply">
                                                        <span className="lzl_jb" style={{display: "none"}}>
                                                            <a href="###" className="user-jubao-button">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
                                                        </span>
                                                        <span className="lzl_op_list j_lzl_o_l"></span>
                                                        <span className="lzl_time">2017-9-23&nbsp;10:04</span>
                                                        <a href="#" className="lzl_s_r">回复</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lzl_single_post j_lzl_s_p ">
                                                <a target="_blank" className="j_user_card lzl_p_p" href="#">
                                                    <img src="http://tb.himg.baidu.com/sys/portrait/item/1316e8af97e5928ce8bf9ce696b9415141e2b6"/>
                                                </a>
                                                <div className="lzl_cnt">
                                                    <a className="at j_user_card " target="_blank" href="#">风雨潇潇
                                                        <img src="" className="nicknameEmoji"  style={{width:13,height:"13px"}}/>
                                                    </a>:&nbsp;
                                                    <span className="lzl_content_main">回复 Esj323<img src="" className="nicknameEmoji"  style={{width:13,height:"13px"}}/> :哦，原来气象热门
                                                    </span>
                                                    <div className="lzl_content_reply">
                                                        <span className="lzl_jb" style={{display: "none"}}>
                                                            <a href="###" className="user-jubao-button">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
                                                        </span>
                                                        <span className="lzl_op_list j_lzl_o_l"></span>
                                                        <span className="lzl_time">2017-9-24&nbsp;01:09</span>
                                                        <a href="#" className="lzl_s_r">回复</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lzl_single_post j_lzl_s_p ">
                                                <a target="_blank" className="j_user_card lzl_p_p" href="#">
                                                    <img src="http://tb.himg.baidu.com/sys/portrait/item/cface88892e68080e68980e7859c2728"/>
                                                </a>
                                                <div className="lzl_cnt">
                                                    <a className="at j_user_card " target="_blank" href="#">趴趴丶猫<img src="" className="nicknameEmoji"  style={{width:13,height:"13px"}}/></a>:&nbsp;
                                                    <span className="lzl_content_main">回复 诗和远方AQA ：毕竟咱学校的大气全国排不上数</span>
                                                    <div className="lzl_content_reply">
                                                        <span className="lzl_jb" style={{display: "none"}}>
                                                            <a href="###" className="user-jubao-button">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
                                                        </span>
                                                        <span className="lzl_op_list j_lzl_o_l"></span>
                                                        <span className="lzl_time">2017-9-25&nbsp;23:39</span>
                                                        <a href="#" className="lzl_s_r">回复</a>
                                                    </div>
                                                </div>
                                                <div className="user-hide-post-down" style={{top: "36px", right: "170px", display: "none"}}></div>
                                            </li>
                                        </ul>
                                        <div className="small-comment" style={{display:this.state.flag?"block":"none"}}>
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