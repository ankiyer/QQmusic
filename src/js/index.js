import reactDom from 'react-dom';
import React from 'react';
import Page from './conpoments/page.js';
import Zhuti from './conpoments/Zhuti/Zhuti.js';
import {Provider,connect} from 'react-redux';
import {musicState} from './redux/actions/music-state.js'
require('../less/index.less');
import reducers from './redux/reducers/reducers.js'
import {zhutiaction} from './redux/actions/zhuti.js';
import {login} from './redux/actions/login.js';
import {loginicon} from './redux/actions/login-icon.js';
import { createStore } from 'redux';
import Reallogin from './conpoments/login/reallogin.js';
import {preplayindex} from './redux/actions/preplayindex.js';
import {nextplayindex} from './redux/actions/nextplayindex.js';
import {imgplay} from './redux/actions/imgplay.js';
let store = createStore(reducers);
class QQmusic extends React.Component{
    constructor(){
     super();
     this.playtime=0;
     this.settime = setInterval(()=>{
      this.props.dispatch(imgplay())
  },150)
    }
    switchmusic(){
            if(this.props.state.musicState.musicState=='playing'){
                $('#min-music-source')[0].play();
                clearInterval(this.settime);
                this.settime = setInterval(()=>{
                  this.props.dispatch(imgplay())
              },200)
            }else{
              console.log(this.settime,'this.props.')
              clearInterval(this.settime);
                $('#min-music-source')[0].pause();
            }
    }
    render(){
      console.log("this.settime ",this.settime )
        let {state,dispatch}=this.props;
        let Firstpagestyle,Zhutistyle,realloginstyle;
        console.log(state)
        if(state.login.login){
           realloginstyle = {
            transform: 'translateY(0%)',
          };
        }else{
           realloginstyle = {
            transform: 'translateY(100%)',
          };
        }
         if(state.tzhuti.zhuti){
          Firstpagestyle = {
            transform: 'translateX(80%)'
          };
          Zhutistyle = {
            transform: 'translateX(0)'
          };
         }
         else {
          Firstpagestyle = {
            transform: 'translateX(0)'
          };
          Zhutistyle = {
            transform: 'translateX(-100%)'
          };
      }
      return (
        <div className='DOM'>
          <img className="startimg" src='./src/img/firstpage.jpg'></img>
          <Page 
          musicState={state.musicState.musicState} 
          zhutiClick={ () => { dispatch(zhutiaction())} } 
          realstyle={Firstpagestyle} 
          loginClick={()=>{$('#reallogin').fadeIn();dispatch(login());}} 
          loginstyle={state.loginicon} 
          zhutistate={state.tzhuti.zhuti}
          playstateswitch={()=>{
            dispatch(musicState())
            this.switchmusic();
            }}
          playindex={state.playindex.playindex}
          playswitchpre={()=>{dispatch(preplayindex())}}
          playswitchnext={()=>{dispatch(nextplayindex())}}
          rotate={state.musicState.rotate}
          ></Page>
          <Zhuti 
          realstyle={Zhutistyle} 
          zhutiClick={ () => { dispatch(zhutiaction()) } }></Zhuti>
          <Reallogin 
          realstyle={realloginstyle} 
          backClick={()=>{$('#reallogin').fadeOut();dispatch(login())}} 
          loginiconchange={()=>{dispatch(loginicon())}}></Reallogin>
        </div>
      )
    }
}
function k(state){
  return {
      state
  }
}
let QQmusicComponent = connect(k)(QQmusic)

reactDom.render(<Provider store={store}><QQmusicComponent/></Provider>,document.getElementById('qqmusic'))
