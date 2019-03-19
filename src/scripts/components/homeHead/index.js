import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";

export default class homeHead extends Component{
    render(){
        return(
            <div className='head'>
                <div className="banner">
                    <img src={Banner}/>
                </div>
                <div className='theme'>
                    <div className='card-right'>
                        <a rel="noreferrer" href="javascript:;" title="签到">
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
        )
    }
}