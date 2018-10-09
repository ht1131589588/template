import React, { Component } from 'react';
import { connect } from 'dva';
import { Input, Icon, Button, Form, message } from 'antd';
import BgImg from './bg.jpg';
import { postAction } from '../../utils/axios'

const FormItem = Form.Item;

const divstyle = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative"
};

const bgimg = {
	position: "absolute",
	top:"0px",
	left:"0px",
	width: "100%",
	height:"100%",
	zIndex: "0",
}

const content = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "348px",
    height: "418px",
    background: "white",
    borderRadius: "5px",
    padding: "35px",
    zIndex: "1",
    marginTop: "-209px",
    marginLeft: "-174px"
}

class LoginPage extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { username, password } = values;
                postAction('/bigdata/user/login',{
                    username, password
                }).then(res=>{
                    if(res.success){
                        const { dispatch } = this.props;
                        dispatch({
                            type: 'global/signin',
                            login: true,
                            menus: res.obj.menus,
                            userInfo: res.obj
                        });
                    } else {
                        message.error(res.obj)
                    }
                })
                
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={divstyle}>
                <img src={BgImg} alt="" style={bgimg} />
                <div style={content}>
                    <h4 style={{ fontSize: "18px", margin: "20px auto", textAlign: "center" }}>大数据应用平台</h4>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入账户名称!' }],
                            })(
                                <Input 
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="请输入账户名称"
                                    size="large" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入账户密码!' }],
                            })(
                                <Input 
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="password" 
                                    placeholder="请输入账户密码"
                                    size="large" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" block htmlType="submit" size="large">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ global }) => {
    const { login } = global;
    return {
        login
    };
}

export default connect(mapStateToProps)(Form.create()(LoginPage));