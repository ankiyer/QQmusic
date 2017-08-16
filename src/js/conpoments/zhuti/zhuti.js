import React from 'react';
require('../../../less/zhuti/zhuti.less');
var Hammer = require('react-hammerjs');
export default class Zhuti extends React.Component{
    zhuan(event){
        if(event.direction==2){
            this.props.zhutiClick();
        }
    }
    render(){
        return (
            <Hammer onSwipe={this.zhuan.bind(this)}>
            <div className='realzhuti' style={this.props.realstyle}>

            </div>
            </Hammer>
        )
    }
} 