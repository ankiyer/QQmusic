import Title from './Title/title.js'
import React from 'react';
import Fristpagedown from './fristpage/fristdown.js'
require('../../less/page/page.less');
export default class Page extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='page' style={this.props.realstyle}>
                <Title zhutiClick={this.props.zhutiClick.bind(this)}></Title>
                <div className='all-page'>
                    <Fristpagedown></Fristpagedown>
                </div>
            </div>
        )
    }
} 
