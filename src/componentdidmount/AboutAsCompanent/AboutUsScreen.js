
import React,{useState,useEffect} from "react";
import "./AboutUsScreen.css";
import {navLinkActive} from "../redux/navRedux/action";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUsTopSection from "./AboutUsTopSection"


const AboutUsScreen =  () =>{

const dispatch = useDispatch()


useEffect(()=>{
    dispatch(navLinkActive("about"))
},[])
   
  
    return(
       <div className="about-as-wrapper-page">
          <AboutUsTopSection />
       </div>
    )
}

export default AboutUsScreen;