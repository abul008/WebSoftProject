
import React,{useState,useEffect} from "react";
import "./HomePageScreen.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHead from '../navbarCompanentHomePage/navHeadPage';
import AboutUsScreen from "../AboutAsCompanent/AboutUsScreen";


const HomePage =  () =>{



   
  
    return(
       <div className="head-page_body1">
          <Router>
             <NavHead/>
              <div className="wraperr-page-container-size">
                  <Route 
                  path="/" 
                  component={AboutUsScreen} />
               </div>   
          </Router>
       </div>
    )
}

export default HomePage;

