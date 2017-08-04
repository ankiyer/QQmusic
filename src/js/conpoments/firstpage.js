import Title from './firstpage/title.js'
import React from 'react';
require('../../less/fristpage/firstpage.less');
export default class Fristpage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='fristpage' style={this.props.realstyle}>
                <Title zhutiClick={this.props.zhutiClick.bind(this)}></Title>
            </div>
        )
    }
} 
