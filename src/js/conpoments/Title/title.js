import React from 'react';
import Search from './search.js';
require('../../../less/page/title.less');
export default class Title extends React.Component{
    constructor() {
        super()
    }
    render(){
        return(
           <div className='title'>
            <div className='zhuti' onClick={this.props.zhutiClick.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>我的</li>
                <li>音乐馆</li>
                <li>发现</li>
            </ul>
            <div className='tinggeshiqu'></div>
            <Search></Search>
           </div> 
        )
    }
}