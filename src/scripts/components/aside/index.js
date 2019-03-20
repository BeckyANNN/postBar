import React, { Component } from "react";

import {Link} from "react-router";
import User1 from "../../../assets/images/user1.jpg";
import User2 from "../../../assets/images/user2.jpg";
import { Pagination,Input,Affix,Button } from 'antd';

export default class Aside extends Component{
    turn=(e)=>{
        if(e.target.tagName=="LI"){
            window.location.href=e.target.getAttribute("data-url")
        }
    }
    render(){
        return(
            <Affix style={{position:"absolute",left:0,zIndex:1,minHeight:500}}>
                <div className="info">
                    <div className="infoItem">
                        <h4 className="region_header">本吧信息        
                            <span className="pull_right">
                                <a rel="noreferrer" target="_blank" href="#">查看详情&gt;&gt;</a>
                            </span>
                        </h4>
                        <div className="region_cnt">
                            <ul className="manager_groups">
                                <li className="media_vertical">
                                    <a rel="noreferrer" className="media_top manager_media" href="#" target="_blank" title="依然是你M">
                                        <img src={User1} alt=""/>
                                        <span className="media_caption">吧主</span>
                                    </a>
                                    <div className="media_bottom">
                                        <a rel="noreferrer" href="#" target="_blank" title="依然是你M">依然是你M</a>
                                    </div>
                                </li>
                                <li className="media_vertical ">
                                    <a rel="noreferrer" className="media_top manager_media" href="#" target="_blank" title="上官逸龙">
                                        <img src={User2} alt=""/>
                                        <span className="media_caption">吧主</span>
                                    </a>
                                    <div className="text_overflow media_bottom">
                                        <a rel="noreferrer" href="#" target="_blank" title="上官逸龙">上官逸龙</a>
                                    </div>
                                </li>
                            </ul>
                            <div id="tbManagerCandidatesNum" style={{display:"none"}}></div>
                            <p className="forum_info_desc">
                                <span>小吧：</span>小吧主共<em>10</em>人
                            </p>
                            <p className="forum_info_desc">
                                <span>会员：</span>
                                <a rel="noreferrer" id="member_name_link" href="#" target="_blank">Cuitor</a>
                            </p>
                            <p className="forum_info_desc">
                                <span>目录：</span>
                                <a rel="noreferrer" href="#" target="_blank">四川院校</a>
                            </p>
                            <div className="apply_groups">
                                <span id="tbManagerApply"><a href="#" target="_blank" data-checkun="un">申请吧主</a></span>
                            </div>


                        </div>
                    </div> 
                    <div className="infoItem">
                        <h4 className="region_header">大家都在搜</h4>
                        <div className="region_cnt">
                        <ul className="search_back_content" onClick={this.turn}>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E5%9B%9B%E5%B7%9D%E6%89%80%E6%9C%89%E4%B8%80%E6%9C%AC%E5%A4%A7%E5%AD%A6%E6%8E%92%E5%90%8D&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_0&amp;rsf=16873038894523620_1995">四川所有一本大学排名</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E5%9B%9B%E5%B7%9D%E4%BA%8C%E6%9C%AC%E5%A4%A7%E5%AD%A6&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_1&amp;rsf=16873038894523620_1995">四川二本大学</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E4%B8%80%E6%B5%81&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_2&amp;rsf=16873038894523620_1995">成都信息工程大学一流</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E7%9A%84%E5%A4%A7%E5%AD%A6%E4%BA%8C%E6%9C%AC&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_3&amp;rsf=16873038894523620_1995">成都的大学二本</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BA%8C%E6%9C%AC%E5%A4%A7%E5%AD%A6&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_4&amp;rsf=16873038894523620_1995">成都二本大学</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E7%90%86%E5%B7%A5%E5%92%8C%E5%B7%9D%E5%86%9C%E5%93%AA%E4%B8%AA%E5%A5%BD&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_5&amp;rsf=16873038894523620_1995">成都理工和川农哪个好</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E7%9A%84%E4%BF%A1%E6%81%AF%E5%AD%A6%E7%A7%91&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_6&amp;rsf=16873038894523620_1995">成都信息工程大学的信息学科</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E8%B0%83%E5%89%82&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_7&amp;rsf=16873038894523620_1995">成都信息工程大学调剂</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E7%83%82%E7%9A%84&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_8&amp;rsf=16873038894523620_1995">成都信息工程大学烂的</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=2018%E5%B7%9D%E5%86%85%E5%A4%A7%E5%AD%A6%E6%8E%92%E5%90%8D&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_9&amp;rsf=16873038894523620_1995">2018川内大学排名</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E5%A4%A7%E5%AD%A6%E5%88%86%E6%95%B0%E7%BA%BF2018&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_10&amp;rsf=16873038894523620_1995">成都大学分数线2018</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E9%BE%99%E6%B3%89%E6%A0%A1%E5%8C%BA&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_11&amp;rsf=16873038894523620_1995">成都信息工程大学龙泉校区</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E5%88%9B%E6%96%B0%E5%AD%A6%E5%88%86&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_12&amp;rsf=16873038894523620_1995">成都信息工程大学创新学分</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E6%80%8E%E4%B9%88%E6%A0%B7%E5%95%8A&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_13&amp;rsf=16873038894523620_1995">成都信息工程大学怎么样啊</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E5%AE%BF%E8%88%8D&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_14&amp;rsf=16873038894523620_1995">成都信息工程大学宿舍</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E8%80%83%E7%A0%94&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_15&amp;rsf=16873038894523620_1995">成都信息工程大学考研</li>
                            <li className="search_back_item j_search_back_item" data-url="https://www.baidu.com/s?wd=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6%E6%98%AF1%E6%9C%AC&amp;tn=SE_pctiebalist_1qeikwq3&amp;rsv_dl=0_cont_tieba_frs_16&amp;rsf=16873038894523620_1995">成都信息工程大学是1本</li>
                        </ul>
                            


                        </div>
                    </div>   
                    
                </div> 
            </Affix>
        )
    }
}