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
let store = createStore(reducers);
class QQmusic extends React.Component{
    constructor(){
     super();
    }
    musicplay(){
      if(this.props.state.musicState.musicState=='playing'){
        $('#min-music-source').find('.active').play();
      }
    }
    render(){
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
          playstate={()=>{
            this.musicplay();
            dispatch(musicState())
            }}
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
