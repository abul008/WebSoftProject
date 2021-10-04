import {
 NAV_BAR_DO_NOT_SHOW,
 NAV_LINK_BACKGROUND_ACTIVE_COLOR
} from "./actionType";

const initialState = { 
    navshow:false,
    navlinkactive:"about"
}

const ConfigureTheNavSection=(state=initialState , action )=>{
       
    switch(action.type){
      
        case  NAV_BAR_DO_NOT_SHOW:
            return{
                ...state,
                navshow:action.payload
            } 
        case NAV_LINK_BACKGROUND_ACTIVE_COLOR:
            return{
                ...state,
               navlinkactive:action.payload
            }
            default:
                return state 
    }
  

}

export default ConfigureTheNavSection;