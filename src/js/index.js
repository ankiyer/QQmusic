import reactDom from 'react-dom';
import React from 'react';
import Firstpage from './conpoments/firstpage.js'
import Zhuti from './conpoments/Zhuti/Zhuti.js'
require('../less/index.less');
class QQmusic extends React.Component{
    constructor(){
     super();
     this.state={
       zhuti:false
     }
    }
    
    zhutiClick(){
      this.setState({zhuti:!this.state.zhuti});
    
    }
    render(){
      let Firstpagestyle,Zhutistyle;
      if(this.state.zhuti){
        Firstpagestyle = {
          transform:'translateX(80%)'
        }
        Zhutistyle={
          transform:'translateX(0)'
        }
      }
      else{
        Firstpagestyle = {
          transform:'translateX(0)'
        }
        Zhutistyle={
          transform:'translateX(-100%)'
        }
      }
        console.log(Zhutistyle,Firstpagestyle)
      return (
        <div className='DOM'>
          <img className="startimg" src={require('../img/firstpage.jpg')}></img>
          <Firstpage zhutiClick={this.zhutiClick.bind(this)} realstyle={Firstpagestyle}></Firstpage>
          <Zhuti realstyle={Zhutistyle}></Zhuti>
        </div>
      )
    }
}
reactDom.render(<QQmusic/>,document.getElementById('qqmusic'))
