import React from 'react';
import Menu from './firstpage-conpoments/menu.js';
import Prelogin from '../login/Prelogin.js';
import Afterlogin from '../login/afterlogin.js';
var Hammer = require('react-hammerjs');
export default class Fristpagedown extends React.Component{
    zhuan(event){
        if(event.direction==4){
                this.props.zhutiClick()
        } 
    }
    render(){
        return (
            <Hammer onSwipe={this.zhuan.bind(this)} ><div className="fristpagedown" >
                <Prelogin  loginClick={this.props.loginClick} loginstyle={this.props.loginstyle}></Prelogin> 
                <Afterlogin loginstyle={this.props.loginstyle}></Afterlogin>
                <Menu></Menu>
            </div></Hammer>
        )
    }
}