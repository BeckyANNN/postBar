import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
export default class Home extends Component{
    render(){
        return(
            <div className='wrap1'>
                <div className='head'>
                    <div className="banner">
                        <img src={Banner}/>
                    </div>
                    <div className='theme'>
                        <div className='card-right'>
                            <a rel="noreferrer" href="#" onClick="return false" data-dw="1" title="签到">
                                <span className="sign_today_date">03月18日</span>
                                <span className="sign_month_lack_days">漏签<span className="j_sign_month_lack_days">0</span>天</span>
                            </a>
                        </div>
                        <div className='card-left'>
                            <div className='card-head'>
                                <a href="#">
                                    <img src={Timg}/>
                                </a>
                            </div>
                            <div className='card-title'>
                                <a href="#" className="card_title_fname">成都信息工程大学</a>
                                <div className="focus_btn_wrap">
                                    <a className="islike_focus"></a>
                                </div>
                                <div className="card-num">
                                    <span className="card_numLabel">关注：</span>
                                    <span className="card_menNum">163,421</span>
                                    <span className="card_numLabel">贴子：</span>
                                    <span className="card_infoNum">5,208,078</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                <a rel="noreferrer" href="/p/5974503384" title="有考本校研究生的吗？" target="_blank" class="j_th_tit ">有考本校研究生的吗？</a>
                                            </div>
                                            <div className="threadlist_author">
                                                <span className="tb_icon_author " title="主题作者: 学姐有资料喔☜" data-field="{&quot;user_id&quot;:3497796971}">
                                                    <i className="icon_author"></i>
                                                    <span class="frs-author-name-wrap">
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
                    </div>
                    <div className="info"></div>                    
                </div>
            </div>
        )
    }
}