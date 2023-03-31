import {TODOADD, TODOLOAd} from "./actionType";
export const loaded = (todos)=>{
    return{
        type:TODOLOAd,
        payload:todos
    }
}