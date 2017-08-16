export function musicState(state={musicState:'pause'},action){
    if(action.type=='musicstate'){
        state.musicState=='pause'?state.musicState='playing':state.musicState='pause'
    }
    return {musicState:state.musicState}
}