import React from 'react';
export default class Reallogin extends React.Component{
    login(){
        if($('.username input').val()=='123456789' && $('.password input').val()=='123456789'){
            this.props.backClick();
            this.props.loginiconchange();
        }else{
            $('.password input').val("");
            $('.username input').val("");
        }
    }
    render(){
        return (
            <div id='reallogin' style={this.props.realstyle}>
                <span id='back' onClick={this.props.backClick}>取消</span>
                <div className='topicon'></div>
                <div className='logindiv'>
                    <div className='hint'>测试账号为123456789,密码为123456789</div>
                    <div className='username'><span>账号</span><input type="text" placeholder='123456789'/></div>
                    <div className='password'><span>密码</span><input type="password"/></div>
                    <div className='login' onClick={this.login.bind(this)}>登录</div>
                </div>
            </div>
        )
    }
} 