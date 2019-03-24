import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button,Radio,InputNumber } from "antd";
import {Link} from "react-router";
import User from "../../../assets/images/user3.jpg";
const RadioGroup = Radio.Group;
export default class Info extends Component{
    render(){
        return(
            <div className="info">
                <div className="left">
                    <dl>
                        <dt>
                            <Link to="detail">寻猫。求帮忙。昨晚10点左右，9栋附近。</Link>
                            <span>回复(20)</span>
                        </dt>
                        <dd>11-17</dd>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="detail">寻猫。求帮忙。昨晚10点左右，9栋附近。</Link>
                            <span>回复(20)</span>
                        </dt>
                        <dd>11-17</dd>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="detail">寻猫。求帮忙。昨晚10点左右，9栋附近。</Link>
                            <span>回复(20)</span>
                        </dt>
                        <dd>11-17</dd>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="detail">寻猫。求帮忙。昨晚10点左右，9栋附近。</Link>
                            <span>回复(20)</span>
                        </dt>
                        <dd>11-17</dd>
                    </dl>
                </div>
                <div className="right">
                    <div className="right-head">
                        <span>个人信息</span>
                        <Link to="shezhi">[ 设置 ]</Link>
                    </div> 
                    <div className="right-center">
                        <dl>
                            <dt> <img src={User}/></dt>
                            <dd>
                                <p>逗比哈nice</p>
                                <p>男</p>
                            </dd>
                        </dl>
                       
                    </div>
                    <div className="right-footer">
                        <Link to="list">首页</Link>
                        <Link to="">我的贴子</Link>
                        <Link to="">我的消息</Link>
                    </div>
                </div>
            </div>
        )
    }
}