import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import {Modal,Form, Input, Icon, Button,Radio,InputNumber } from "antd";
const RadioGroup = Radio.Group;
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:false,//是否处于编辑状态
        }
    }
    //编辑
    handleEdit=()=>{
        this.setState({
            flag:true
        })
    }
    //权限编辑
    handleCancel=()=>{
        this.setState({
            flag:false
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const {flag} = this.state;
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
          
        
        return(
            <div className="register">
                <div id="head">
                    <h2>个人信息</h2>
                </div>
                <div id='nav'></div>
                <div id="content">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="用户名" {...tailFormItemLayout}>
                        {getFieldDecorator('name', {
                            initialValue:"朱一龙",
                            rules: [{
                                required: flag?true:false, message: 'Please input your name',
                            }],
                            
                        })(
                            flag?<Input className="borderHeight"/>:<p className="borderHeight">朱一龙</p>
                        )}
                        </Form.Item>
                        <Form.Item label="密码" {...tailFormItemLayout}>
                        {getFieldDecorator('password', {
                            initialValue:"123456",
                            rules: [{
                                required: flag?true:false, message: 'Please input your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            flag?<Input type="password" className="borderHeight"/>:<p className="borderHeight">123456</p>
                        )}
                        </Form.Item>
                        <Form.Item label="性别" {...tailFormItemLayout}>
                            {getFieldDecorator('sex',{
                                initialValue:0,
                            })(
                                flag?<RadioGroup style={{lineHeight:"40px"}}>
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </RadioGroup>:<p className="borderHeight">男</p>
                            )}
                        </Form.Item>
                        <Form.Item label="年龄" {...tailFormItemLayout}>
                            {getFieldDecorator('age',{
                                initialValue:23,
                            })(
                                flag?<InputNumber min={0} style={{height:40}}/>:<p className="borderHeight">23</p>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {flag?<div>
                                <Button type="primary" htmlType="submit" className="footBtn">完成</Button>
                                <Button type="primary" className="footBtn" onClick={this.handleCancel}>取消</Button>
                            </div>:<Button type="primary" className="footBtn" onClick={this.handleEdit}>编辑</Button>}
                        </Form.Item>
                    </Form>
                </div>
                {this.state.loginVisible?loginModal:null}
            </div>
        )
    }
}
export default Form.create()(Register);