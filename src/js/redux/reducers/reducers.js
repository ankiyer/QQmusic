import { combineReducers } from 'redux';
import {loginicon} from './loginicon.js'
function tzhuti(state={zhuti:false},action){
    if(action.type=='zhuti'){
        // console.log(state,'actionzhuti')
        state.zhuti=!state.zhuti;
    }
    console.log(state)
    return {zhuti:state.zhuti};
}
function login(state={login:false},action){
    if(action.type=='login'){
        state.login=!state.login;
    }
    return {login:state.login};
}
export default combineReducers({
    login,
    tzhuti,
    loginicon
}) 