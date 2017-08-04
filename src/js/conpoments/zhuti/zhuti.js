import React from 'react';
require('../../../less/zhuti/zhuti.less');
export default class Zhuti extends React.Component{
    render(){
        return (
            <div className='realzhuti' style={this.props.realstyle}>
            </div>
        )
    }
} 