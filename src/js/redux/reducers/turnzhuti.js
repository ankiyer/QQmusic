import { combineReducers } from 'redux';
// import {zhuti} from '../actions/zhuti.js'
export default function tzhuti(state=false,action){
    console.log(action)
    if(action.type=='zhuti'){
    state=!state;
    }
    console.log(state)
    return state;
}