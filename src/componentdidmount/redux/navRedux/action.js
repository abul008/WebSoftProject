import {
    NAV_BAR_DO_NOT_SHOW,
    NAV_LINK_BACKGROUND_ACTIVE_COLOR
} from "./actionType";

export const navDoNotShow = (navnone)=>{
    return{
        type:NAV_BAR_DO_NOT_SHOW,
        payload:navnone
    }
}
export const navLinkActive = (linkactive) =>{
    return{
        type:NAV_LINK_BACKGROUND_ACTIVE_COLOR,
        payload:linkactive
    }
}

