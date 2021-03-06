import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button} from "antd";
import {Link,hashHistory} from "react-router";
import $ from "jquery";
import axios from "axios";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    //登录
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post(api+login,{
                    "username":values.name,
                    "password":values.password
                    
                  }).then(res=>{
                       if(res.data&&res.data.code==0){
                           sessionStorage.token = res.data.data.token;
                           sessionStorage.nickName = res.data.data.userInfo.nickName;
                           hashHistory.push("/home");
                       }else{
                           Modal.error({
                               title:"失败",
                               content:res.data.msg||"服务器错误，请联系管理员"
                           })
                       }
                  })
            }
        });
    }
    //注册
    loginBtn=()=>{
        hashHistory.push("/register");
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
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
                sm: { span: 12,offset: 3 },
              },
          };
       
        return(
            <div className="register">
                <div id="head">
                    <h2>登录</h2>
                    <div className="login-link">
                        <span>我未注册，现在就</span>
                        <button className="login-btn" id="login_btn" onClick={this.loginBtn}>注册</button>
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
                            <Input type="password" className="borderHeight" autoComplete="new-password"/>
                        )}
                        </Form.Item>
                        <Form.Item {...submitFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{width:"100%"}}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Form.create()(Register);