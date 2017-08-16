export function loginicon(state={predisplay:'block',afterdisplay:'none'},action){

    if(action.type=='loginicon'){
  
        if(state.predisplay=='none'){
            state.predisplay='block';
            state.afterdisplay='none';
        }else{
            state.predisplay='none';
            state.afterdisplay='block';
        }
    }
    return {predisplay:state.predisplay,afterdisplay:state.afterdisplay}
}