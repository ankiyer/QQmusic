import React from 'react';
export default class Afterlogin extends React.Component{
    render(){
        let display={
            display:this.props.loginstyle.afterdisplay
        }
        return (
            <div id='Afterlogin' style={display}>
                <div className='headicon'></div>
                <span>胡安琪的demo</span>
                <div className='lvzuanicon'></div>
            </div>
        )
    }
} 