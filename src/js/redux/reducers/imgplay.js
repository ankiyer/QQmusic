export function imgplay(state={rotate:0},action){
        if(action.type=='musicstate'){
            state.rotate++;
        }
        return {rotate:state.rotate}
    }