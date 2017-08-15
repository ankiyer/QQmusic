import reactDom from 'react-dom';
import React from 'react';
import Page from './conpoments/page.js';
import Zhuti from './conpoments/Zhuti/Zhuti.js';
import {Provider,connect} from 'react-redux'
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
    render(){
        let {state,dispatch}=this.props;
        let Firstpagestyle,Zhutistyle,realloginstyle;
        console.log(state,'render');
          // console.log(state.login.login)
        if(state.login.login){
           realloginstyle = {
            transform: 'translateY(0%)'
          };
        }else{
           realloginstyle = {
            transform: 'translateY(100%)'
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
        console.log(realloginstyle)
      return (
        <div className='DOM'>
          <img className="startimg" src='./src/img/firstpage.jpg'></img>
          <Page zhutiClick={ () => { dispatch(zhutiaction()) } } realstyle={Firstpagestyle} loginClick={()=>{dispatch(login())}} loginstyle={state.loginicon} tzhuti={state.tzhuti.zhuti}></Page>
          <Zhuti realstyle={Zhutistyle}></Zhuti>
          <Reallogin realstyle={realloginstyle} backClick={()=>{dispatch(login())}} loginiconchange={()=>{dispatch(loginicon())}}></Reallogin>
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
