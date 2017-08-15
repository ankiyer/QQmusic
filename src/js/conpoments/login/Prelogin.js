import React from 'react';
export default class Prelogin extends React.Component{
    render(){
        let display ={
            display:this.props.loginstyle.predisplay
        }
        return (
            <div id='prelogin' style={display}>
                <span>登录听歌，畅享高品质和无损品质曲库</span>
                <div id='loginbtu' onClick={this.props.loginClick}>立即登录</div>
            </div>
        )
    }
} 