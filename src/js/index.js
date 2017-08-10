import reactDom from 'react-dom';
import React from 'react';
import Page from './conpoments/page.js';
import Zhuti from './conpoments/Zhuti/Zhuti.js';
import {Provider,connect} from 'react-redux'
require('../less/index.less');
import tzhuti from './redux/reducers/turnzhuti.js'
import {zhuti} from './redux/actions/zhuti.js';
import { createStore } from 'redux'
class QQmusic extends React.Component{
    constructor(){
     super();
    }
    render(){
        let {state,dispatch}=this.props;
        let Firstpagestyle,Zhutistyle;
         if(state){
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
          <img className="startimg" src={require('../img/firstpage.jpg')}></img>
          <Page zhutiClick={()=>{dispatch(zhuti())}} realstyle={Firstpagestyle}></Page>
          <Zhuti realstyle={Zhutistyle}></Zhuti>
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
let store = createStore(tzhuti);
reactDom.render(<Provider store={store}><QQmusicComponent/></Provider>,document.getElementById('qqmusic'))
