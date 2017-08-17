import { combineReducers } from 'redux';
import {loginicon} from './loginicon.js';
import {musicState} from './music-state.js';
import {playindex} from './playindex.js';
import {imgplay} from './imgplay.js';
function tzhuti(state={zhuti:false},action){
    if(action.type=='zhuti'){
        state.zhuti=!state.zhuti;
    }
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
    loginicon,
    musicState,
    playindex
}) 