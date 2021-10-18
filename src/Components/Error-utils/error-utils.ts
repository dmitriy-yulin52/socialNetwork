import {setErrorAppAC, SetErrorAppAT} from "../../Redux/App/app-reducer";
import {Dispatch} from "redux";
import {ResponseTypeAuth} from "../../api/api";


export const handleServerAppError = <D>(data:ResponseTypeAuth<D>,dispatch:Dispatch<SetErrorAppAT>)=>{
    if(data.messages[0] === 'You are not authorized'){
        dispatch(setErrorAppAC(data.messages[0]))
    }else{
        dispatch(setErrorAppAC('Network error'))
    }
    // dispatch(setErrorAppAC(data.messages[0]))
}