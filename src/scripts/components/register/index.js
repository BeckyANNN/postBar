import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button} from "antd";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            loginVisible:false
        }
    }
    //点击登录弹出登录框
    loginBtn=()=>{
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
    render(){
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 2 },
              },
              wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12},
              },
          };
          const submitFormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 2 },
              },
              wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12,offset: 2 },
              },
          };
        //登录框
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
                </Form.Item>
            </Form>
        </Modal>
        return(
            <div className="register">
                <div id="head">
                    <h2>注册</h2>
                    <div className="login-link">
                        <span>我已注册，现在就</span>
                        <button className="login-btn" id="login_btn" onClick={this.loginBtn}>登录</button>
                    </div>
                </div>
                <div id='nav'></div>
                <div id="content">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="用户名" {...tailFormItemLayout}>
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Please input your name',
                            }],
                        })(
                            <Input className="borderHeight"/>
                        )}
                        </Form.Item>
                        <Form.Item label="密码" {...tailFormItemLayout}>
                        {getFieldDecorator('password', {
                            rules: [{
                            required: true, message: 'Please input your password!',
                            }, {
                            validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password" className="borderHeight"/>
                        )}
                        </Form.Item>
                        <Form.Item {...submitFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{width:"100%"}}>注册</Button>
                        </Form.Item>
                    </Form>
                </div>
                {this.state.loginVisible?loginModal:null}
            </div>
        )
    }
}
export default Form.create()(Register);