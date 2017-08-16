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
            if($('#playingmusic ul').find('.active').next().length){
                $('#playingmusic ul').find('.active').removeClass().next().addClass('active');               
                $('#min-music-source').find('.active').removeClass().next().addClass('active');
            }
            else{
                $('#min-music-source').find('.active').removeClass();
                $('#min-music-source').children().first().addClass('active');
                $('#playingmusic ul').find('.active').removeClass();
                $('#playingmusic ul li').first().addClass('active');
            }
        }
        else if(events.direction==4){
            if($('#playingmusic ul').find('.active').prev().length){
                $('#playingmusic ul').find('.active').removeClass().prev().addClass('active');
                $('#min-music-source').find('.active').removeClass().prev().addClass('active');
            }
            else{

                $('#min-music-source').find('.active').removeClass();
                $('#min-music-source').children().last().addClass('active')
                $('#playingmusic ul').find('.active').removeClass();
                $('#playingmusic ul li').last().addClass('active');
            }
        }
    }
    componentDidMount() {
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
    console.log(this.props.musicState)
        return (
            <Hammer onSwipe={this.switchsong.bind(this)}>
        <div id='minplayer'>
            <audio  id='min-music-source'>
                {
                    arrmusicsource.map(function(map,index){
                        return <source  src={map} key={index}/>
                    })
                }
            </audio>
            <div id="playingmusic">
                <ul>
                {
                     arrmusicsource.map(function(map,index){
                        return <li data-id={index} key={index}><div id='messagediv'><img src={musicicon[index]} /><div id='songandsinger'><span id="song">{musicname[index]}</span><span id='singer'>{singer[index]}</span></div></div></li>
                    })
                }
                </ul>
            </div>
            <div id='minplayer-icon'>
                <div id='playstate' className={this.props.musicState} onClick={this.props.playstate}></div>
                <div className='list-icon'></div>
            </div>
        </div> 
        </Hammer>
        )
    } 
}