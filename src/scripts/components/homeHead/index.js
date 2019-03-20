import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button} from "antd";
import {Link} from "react-router";
class homeHead extends Component{
    constructor(props){
        super(props);
        this.state={
            loginVisible:false
        }
    }
    //点击登录弹出登录框
    loginClick=()=>{
        this.setState({
            loginVisible:true
        })
    }
    //关闭登录框
    handleCancel=()=>{
        this.setState({
            loginVisible:false
        })
    }
    //重新加载
    reload=()=>{
        location.reload();
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        
        let loginModal = <Modal className="loginModal"
            footer={null}
            width={300}
            onCancel={this.handleCancel}
            visible={this.state.loginVisible}>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h2 style={{marginBottom:10}}>用户登录</h2>
                <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
                    Log in
                </Button>
                Or <Link to="register">register now!</Link>
                </Form.Item>
            </Form>
        </Modal>
        return(
            <div className='head'>
                <div className='login'>
                    <span onClick={this.loginClick}>登录</span>
                    <span><Link to="register" style={{color:"#333"}}>注册</Link></span>
                </div>
                <div className="banner">
                    <img src={Banner} onClick={this.reload}/>
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
                            <Link to='info'>
                                <img src={Timg}/>
                            </Link>
                        </div>
                        <div className='card-title'>
                            <Link to="info" className="card_title_fname" >成都信息工程大学</Link>
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
                {this.state.loginVisible?loginModal:null}
            </div>
        )
    }
}
export default Form.create()(homeHead);