import React, { Component } from "react";

import {Link} from "react-router";
import User1 from "../../../assets/images/user1.jpg";
import User2 from "../../../assets/images/user2.jpg";
import { Pagination,Input,Affix,Button } from 'antd';

export default class Aside extends Component{
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
                </div> 
            </Affix>
        )
    }
}