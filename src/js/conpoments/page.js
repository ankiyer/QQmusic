import Title from './Title/title.js';
import React from 'react';
import Fristpagedown from './fristpage/fristdown.js';
import Musicplaymin from './music/music-play-min.js'
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
                <Fristpagedown loginClick={this.props.loginClick} loginstyle={this.props.loginstyle} zhutiClick={this.props.zhutiClick} zhutistate={this.props.zhutistate}></Fristpagedown>
                </div>
                <Musicplaymin 
                musicState={this.props.musicState} 
                playstateswitch={this.props.playstateswitch} 
                playindex={this.props.playindex}
                playswitchpre={this.props.playswitchpre}
                playswitchnext={this.props.playswitchnext}
                ></Musicplaymin>
            </div>
        )
    }
} 
