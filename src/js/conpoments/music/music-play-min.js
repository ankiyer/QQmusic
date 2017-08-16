import React from 'react';
var Hammer = require('react-hammerjs');
export default class Musicplaymin extends React.Component{
    constructor(){
        super();
        this.state={
            musicdata:""
        }
    }
    switchsong(events){
        if(events.direction==2){
            
            this.props.playswitchnext();
        }
        else if(events.direction==4){
            
            this.props.playswitchpre();
        }
    }
    componentDidMount() {
        
            console.log( $('#min-music-source')[0]);
            if(this.props.musicState=='playing'){
                $('#min-music-source')[0].play();
            }else{
                $('#min-music-source')[0].pause();
            }
       window.getdata = (data)=>{
           this.setState({
            musicdata:data
           })
        }
        
}
    render(){
        let musicdata = this.state.musicdata,
            num = musicdata.length,
            arrmusicsource=new Array(),
            musicicon = new Array(),
            singer = new Array(),
            musicname =new Array();
        for(let value in musicdata.data){
             arrmusicsource.push(musicdata.data[value].musicurl);
             musicicon.push(musicdata.data[value].musicicon);
             singer.push(musicdata.data[value].singer);
             musicname.push(value);
        }
        return (
            <Hammer onSwipe={this.switchsong.bind(this)}>
        <div id='minplayer'>
            <audio  id='min-music-source' src={arrmusicsource[this.props.playindex]}>
                {
                    arrmusicsource.map((map,index)=>{
                        if(index==this.props.playindex){
                                return <source  src={map} key={index}  type="audio/mp3" className="active"/>}
                        else{
                                return <source  src={map} key={index}  type="audio/mp3"/>
                        }

                    })
                }
            </audio>
            <div id="playingmusic">
                <ul>
                {
                     arrmusicsource.map((map,index)=>{
                         if(index==this.props.playindex){
                                 return <li data-id={index} key={index} className="active"><div id='messagediv'><img src={musicicon[index]} /><div id='songandsinger'><span id="song">{musicname[index]}</span><span id='singer'>{singer[index]}</span></div></div></li>
                         }
                         else{
                                 return <li data-id={index} key={index}><div id='messagediv'><img src={musicicon[index]} /><div id='songandsinger'><span id="song">{musicname[index]}</span><span id='singer'>{singer[index]}</span></div></div></li>
                         }
                    })
                }
                </ul>
            </div>
            <div id='minplayer-icon'>
                <div id='playstate' className={this.props.musicState} onClick={this.props.playstateswitch}></div>
                <div className='list-icon'></div>
            </div>
        </div> 
        </Hammer>
        )
    } 
}