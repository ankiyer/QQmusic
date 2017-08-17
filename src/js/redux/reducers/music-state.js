export function musicState(state={musicState:'playing',rotate:0},action){
    if(action.type=='musicstate'){
     
            state.musicState=='pause'?state.musicState='playing':state.musicState='pause'
    }
    else if(action.type=='imgplay'){
        if(state.musicState=='playing'){
            state.rotate+=6;
        }

    }
    return {musicState:state.musicState,rotate:state.rotate}
}