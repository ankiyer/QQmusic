import React from 'react';
 export default class Menu extends React.Component{
     render(){
         return (
             <div className="menu">
                 <ul>
                     <li><div style={{backgroundImage:'url(src/img/all-music-icon.png)'}}></div><span>全部音乐</span></li>
                     <li><div style={{backgroundImage:'url(src/img/download-icon.png)'}}></div><span>下载歌曲</span></li>
                     <li><div style={{backgroundImage:'url(src/img/closet-icon.png)'}}></div><span>最近播放</span></li>
                     <li><div style={{backgroundImage:'url(src/img/like-icon.png)'}}></div><span>我喜欢</span></li>  
                     <li><div style={{backgroundImage:'url(src/img/download-mv-icon.png)'}}></div><span>下载MV</span></li>
                 </ul>
             </div>
         )
     }
 }