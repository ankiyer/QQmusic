export function loginicon(state={predisplay:'block',afterdisplay:'none'},action){
    // console.log(action)
    if(action.type=='loginicon'){
        // console.log()
        if(state.predisplay=='none'){
            state.predisplay='block';
            state.afterdisplay='none';
        }else{
            console.log('qqqq')
            state.predisplay='none';
            state.afterdisplay='block';
        }
    }
    return {predisplay:state.predisplay,afterdisplay:state.afterdisplay}
}