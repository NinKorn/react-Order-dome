import React, { Component } from 'react'
import { Redirect } from 'react-router'
import '../assets/css/login.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isflag: false
        };
    }
    goLogin=()=>{
        if(this.refs.userName.value == '111' && this.refs.passWord.value == '111') {
            this.setState({
                isflag:true
            })
        }
    }
    render() {
        if(this.state.isflag) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="login">
                <div className="title">
                    <img src="//www.baidu.com/img/bd_logo1.png?qua=high&where=super" alt=""/>
                </div>
                <div className="input-box">
                    <div className="input">
                        <span>用户名：</span><input type="text" ref="userName" />
                    </div>
                    <div className="input">
                        <span>密码：</span><input type="password" ref="passWord" />
                    </div>
                    <div className="button" onClick={ this.goLogin }>登录</div>
                </div>
            </div>
        );
    }
}

export default Login;