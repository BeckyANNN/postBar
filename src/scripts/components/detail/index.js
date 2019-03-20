import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Input,Affix,Button } from 'antd';
import Head from "../homeHead"
export default class Detail extends Component{
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
                                <a href="#" title="成都信息工程大学">&lt;&lt;返回成都信息工...吧</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}