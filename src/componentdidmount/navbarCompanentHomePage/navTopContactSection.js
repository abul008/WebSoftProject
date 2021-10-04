import React,{useState,useEffect} from "react";
import "./navTopContactSection.css";
import axios from "axios";
import { Link } from "react-router-dom";

const navTopContactSection =  () =>{

  
    return( 
     <div className="navbar-top-contacts-section-wrapper">
          <div className="navbar-top-logo">
              
            </div>  
          <div className="navbar-top-contacts"></div>  
      </div>
    )
}

export default navTopContactSection;