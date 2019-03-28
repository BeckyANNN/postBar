import React, { Component } from "react";
import Banner from "../../../assets/images/banner.jpg";
import Timg from "../../../assets/images/timg.jpg";
import User from "../../../assets/images/user3.jpg";
import {Modal,Form, Input, Upload, Icon, Button,Radio,InputNumber } from "antd";
import $ from "jquery";
import axios from "axios";
import Base from "../base";
const RadioGroup = Radio.Group;
class Shezhi extends Base{
    constructor(props){
        super(props);
        this.state={
            flag:false,//是否处于编辑状态
            previewImage: '',
            previewVisible: false,
            fileList: [],
              pwdVisible:false,
              pwd:'',
              oldPwd:"",
              valid:true,//输入密码是否有效
              name:"",
              nickName:"",
              sex:"",
              avatar:""
        }
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            this.getInfo();        
        },1000)
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
    //获取个人信息
    getInfo=()=>{
        this.fetchGet(api+info,json=>{
            if(json.code==0){
                this.setState({
                    name:json.data.username,
                    nickName:json.data.nickName,
                    sex:json.data.sex,
                    avatar:json.data.avatar
                })
            }
        })
    }
    handleImgCancel = () => this.setState({ previewVisible: false });
    handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    }
    //修改密码按钮
    editPwd=()=>{
        this.setState({
            pwdVisible:true,
        })
    }
    //修改密码
    handlePwd=(e)=>{
        this.setState({
            pwd:e.target.value
        })
        if(e.target.value.length<6){
            this.setState({
                valid:false
            })
        }else{
            this.setState({
                valid:true
            })
        }
    }
    //原密码
    handleOldPwd=(e)=>{
        this.setState({
            oldPwd:e.target.value
        })
    }
    //提交修改密码
    handleOk=()=>{
        if(this.state.oldPwd!=this.state.pwd){
            this.fetchPost(api+resetPwd,{
                "oldPwd":this.state.oldPwd,
                "newPwd":this.state.pwd
            },json=>{
                if(json.code==0&&json.data.result){
                    Modal.success({
                        title:"成功",
                        content:"修改成功"
                    })
                    this.setState({
                        pwdVisible:false,
                        oldPwd:"",
                        pwd:"",
                        valid:true
                    })
                }
            })
        }else{
            Modal.error({
                title:"失败",
                content:"两次密码一致"
            })
        }
    }
    //取消修改
    handleCancelPwd=()=>{
        this.setState({pwdVisible:false,oldPwd:"",pwd:"",valid:true})
    }
    //修改个人信息
    handleSubmit=(e)=>{
        const {fileList} = this.state;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.fetchPost(api+info,{
                    "sex":values.sex,
                    "nickName":values.nickName, 
                    "username":values.name,
                    "avatar":fileList[0].response.data.result
                    
                },json=>{
                    if(json.code==0){
                        this.setState({
                            flag:false,
                            fileList:[]
                        })
                        Modal.success({
                            title:"成功",
                            content:"个人信息修改成功"
                        })
                        this.getInfo();
                    }else{
                        Modal.error({
                            title:"失败",
                            content:json.msg||"服务器错误，请联系管理员"
                        })
                    }
                })
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const {flag,previewVisible, previewImage, fileList,valid} = this.state;
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
        let pwdModal = <Modal title="修改密码"
            onCancel={this.handleCancelPwd}
            visible={this.state.pwdVisible}
            onOk={this.handleOk}
            >
            <div className="editPwd">
                <p>
                    <span>原密码</span>
                    <Input value={this.state.oldPwd} type="password" onChange={this.handleOldPwd} autoComplete="new-password"/>
                </p>
                <p>
                    <span>新密码</span>
                    <Input value={this.state.pwd} type="password" onChange={this.handlePwd} autoComplete="new-password"/>
                    <p className="extra" style={{display:valid?"none":"block"}}>至少输入六位密码</p>
                </p>
            </div>
        </Modal>  
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return(
            <div className="register">
                <div id="head">
                    <h2>个人信息</h2>
                </div>
                <div id='nav'></div>
                <div id="content">
                    <div className="pic">
                        <div className="picLeft">
                            <p>当前头像</p>
                            <img src={this.state.avatar}/>
                        </div>
                        <div className="picRight">
                            <p>设置新头像</p>
                            <div>
                            <Upload
                                action={api+upload}
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                                >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleImgCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                            </div>
                        </div>
                    </div>
                    {flag?<Form className="editInfo">
                        <Form.Item label="用户名" {...tailFormItemLayout}>
                        {getFieldDecorator('name', {
                            initialValue:this.state.name,
                        })(
                            <Input disabled className="borderHeight"/>
                        )}
                        </Form.Item>
                        <Form.Item label="昵称" {...tailFormItemLayout}>
                        {getFieldDecorator('nickName', {
                            initialValue:this.state.nickName,
                        })(
                            <Input className="borderHeight"/>
                        )}
                        </Form.Item>
                        <Form.Item label="性别" {...tailFormItemLayout}>
                            {getFieldDecorator('sex',{
                                initialValue:this.state.sex,
                            })(
                                <RadioGroup style={{lineHeight:"40px"}}>
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </RadioGroup>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <div>
                                <Button type="primary" onClick={this.handleSubmit} className="footBtn">完成</Button>
                                <Button type="primary" className="footBtn" onClick={this.handleCancel}>取消</Button>
                            </div>
                        </Form.Item>
                    </Form>:<Form className="editInfo">
                        <Form.Item label="用户名" {...tailFormItemLayout}>
                        {getFieldDecorator('username', {
                            initialValue:this.state.name,
                        })(
                            <p className="borderHeight">{this.state.name}</p>
                        )}
                        </Form.Item>
                        <Form.Item label="昵称" {...tailFormItemLayout}>
                        {getFieldDecorator('nickname', {
                            initialValue:this.state.nickName,
                        })(
                            <p className="borderHeight">{this.state.nickName}</p>
                        )}
                        </Form.Item>
                        <Form.Item label="性别" {...tailFormItemLayout}>
                            {getFieldDecorator('sex1',{
                                initialValue:this.state.sex,
                            })(
                                <p className="borderHeight">{this.state.sex==0?"男":"女"}</p>
                            )}
                        </Form.Item>
                        <Form.Item>
                           <div>
                                <Button type="primary" className="footBtn" onClick={this.handleEdit}>编辑</Button>
                                <Button type="primary" className="footBtn" onClick={this.editPwd}>修改密码</Button>
                            </div>
                        </Form.Item>
                    </Form>}
                </div>
                {this.state.pwdVisible?pwdModal:null}
            </div>
        )
    }
}
export default Form.create()(Shezhi);