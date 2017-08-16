export function playindex(state={playindex:0,max:12},action){
    console.log(action.type)
    if(action.type=='pre'){
            state.playindex==0?state.playindex=state.max:state.playindex-=1;
            console.log(state.playindex,'pre',state.max)
        }
        else if(action.type=='next'){
            state.playindex==state.max?state.playindex=0:state.playindex+=1;
             console.log(state.playindex,'next')
        }
    
        return {playindex:state.playindex,max:state.max}
}