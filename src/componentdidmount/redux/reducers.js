
import {combineReducers} from "redux";
import ConfigureTheNavSection from "./navRedux/reducer";



const allReducers = combineReducers({
    navbarallcantrol:ConfigureTheNavSection
   
})
export default allReducers;