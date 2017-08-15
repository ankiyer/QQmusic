import React from 'react';
import Menu from './firstpage-conpoments/menu.js';
import Prelogin from '../login/Prelogin.js';
import Afterlogin from '../login/afterlogin.js';
export default class Fristpagedown extends React.Component{
    render(){
        return (
            <div className="fristpagedown">
                <Prelogin  loginClick={this.props.loginClick} loginstyle={this.props.loginstyle}></Prelogin> 
                <Afterlogin loginstyle={this.props.loginstyle}></Afterlogin>
                <Menu></Menu>
            </div>
        )
    }
}