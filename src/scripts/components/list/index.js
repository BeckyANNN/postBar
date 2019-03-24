import React, { Component } from "react";

import {Link} from "react-router";
import { Pagination,Icon,Affix,BackTop,Input, Button } from 'antd';
import Head from "../homeHead";
import User from "../../../assets/images/user.jpg";
import Timg from "../../../assets/images/timg.jpg";
import Banner from "../../../assets/images/banner.jpg";
import Comment from "../comment";
const TextArea = Input.TextArea;
export default class List extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:true,//是否展示回复列表
            isComment:false,//是否回复
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
    isComment=()=>{
        this.setState({
            isComment:!this.state.isComment
        })
    }
    render(){
        const {isComment,flag} = this.state;
        return(
            <div className="detail wrap1">
                <div className='head'>
                    <div className="banner">
                        <img src={Banner} onClick={this.reload}/>
                    </div>
                    <Link to='shezhi' className="editInfo">编辑资料</Link>
                    <div className='theme'>
                        <div className='card-left'>
                            <div className='card-head'>
                                <Link to='info'>
                                    <img src={Timg}/>
                                </Link>
                            </div>
                            <div className='card-title'>
                                <span className="card_title_fname" >逗比哈nice</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="infoList">
                        <dl>
                            <dt><img src={User}/></dt>     
                            <dd>
                                <p><span>扒皮吧</span><span>2019-02-12</span></p>
                                <Link to="detail">你们知道吗，一个给你第一印象非常糟糕的人，接触下来，...</Link>
                                <p>你们知道吗，一个给你第一印象非常糟糕的人，接触下来，也可能是个挺可爱的人。</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src={User}/></dt>     
                            <dd>
                                <p><span>扒皮吧</span><span>2019-02-12</span></p>
                                <Link to="detail">你们知道吗，一个给你第一印象非常糟糕的人，接触下来，...</Link>
                                <p>你们知道吗，一个给你第一印象非常糟糕的人，接触下来，也可能是个挺可爱的人。</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src={User}/></dt>     
                            <dd>
                                <p><span>扒皮吧</span><span>2019-02-12</span></p>
                                <Link to="detail">你们知道吗，一个给你第一印象非常糟糕的人，接触下来，...</Link>
                                <p>你们知道吗，一个给你第一印象非常糟糕的人，接触下来，也可能是个挺可爱的人。</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src={User}/></dt>     
                            <dd>
                                <p><span>扒皮吧</span><span>2019-02-12</span></p>
                                <Link to="detail">你们知道吗，一个给你第一印象非常糟糕的人，接触下来，...</Link>
                                <p>你们知道吗，一个给你第一印象非常糟糕的人，接触下来，也可能是个挺可爱的人。</p>
                            </dd>
                        </dl>  
                    </div>
                   
                </div>
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