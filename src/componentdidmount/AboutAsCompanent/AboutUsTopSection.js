import React,{useState,useEffect} from "react";
import "./AboutUsTopSection.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavHead from '../navbarCompanentHomePage/navHeadPage';
import AboutUsTopSectionCarusel from "./AboutUsScreenCarusel"
import i18next from "i18next";


const AboutUsTopSection =  () =>{

const dispatch = useDispatch()
const [borderactive ,setBorderactive] = useState({fundamental:"1px solid #1B7F9D" ,intermediate:" "})



   
  
    return(
       <div className="about-us-top-section-wrapper-page">
        
           <div className="about-us-top-carusel-section">
           <div className="about-us-top-section-cantrol">
              <div className="abot-us-top-lorem">
                  <h2>Welcome to <span>Id</span> World</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              </div> 
           </div>
             <AboutUsTopSectionCarusel />
            </div>
           <div className="about-us-top-card-information-section">
                 <div className="about-us-top-card-information-cantrol">
                     <h2>{i18next.t('availabletrainings')}</h2>
                     <div className="about-us-top-card-information-cantrol">
                         <div className="about-us-carrd-link-list">
                             <span
                             onClick={()=>{
                                 setBorderactive({...borderactive,fundamental:"1px solid #1B7F9D" , intermediate:""})
                             }}
                              style={{borderBottom:borderactive.fundamental}}>
                                  {i18next.t('fundamental')}
                              </span>
                              <span 
                              onClick={()=>{
                                setBorderactive({...borderactive,fundamental:"" , intermediate:"1px solid #1B7F9D"})
                              }}
                              style={{borderBottom:borderactive.intermediate}}>
                                 {i18next.t('intermediate')}
                              </span>
                         </div>
                     </div>
                 </div>
           </div>
          
       </div>
    )
}

export default AboutUsTopSection;