
import React,{useState,useEffect} from "react";
import "./navHeadPage.css";
import { Link } from "react-router-dom";
import logosvg from "../webSoftLogoSvg/webSoftLogo.svg"
import ChangeLenguage from "../changeLanguage/changeLanguage"
import i18next from "i18next";
import { useSelector } from "react-redux";

// import axios from "axios";

const NavHead =  () =>{


  const navlinkactive = useSelector(state=>state.navbarallcantrol.navlinkactive)

  const wrappermanulink = [
    "trainings",
    "services",
    "portfolio",
    "career",
    "contactus"
  ]

  console.log(navlinkactive)
  
    return(
       <div className="navbar-wrapper-page">
           <div className="navbar-top-section">
             <div className="navbar-top-section-cantrol">
               <div style={{background:`url(${logosvg})`}} className="navbar-top-manu-logo"></div>
               <div className="navbar-top-contact-information">
                 <ul>
                   <li><a>+37444128008</a></li>
                   <li><a>+374095011105</a></li>
                   <li><a>web.soft@gmail.com</a></li>
                 </ul>
               </div>
             <ChangeLenguage/>

             </div>
           </div>
           <div className="navbar-manu-section">
             <ul>
               <li><Link style={{color:navlinkactive === "about" ? "#1B7F9D" : ""  }} to="/">{i18next.t('aboutus')}</Link></li>
               {
                 wrappermanulink.map((data,index)=>{
                     return(
                       <li key={index}>
                        <Link
                        style={{color:navlinkactive === `${data}` ? "#1B7F9D" : "" }} 
                        to={data} key={index}>
                        {i18next.t(`${data}`)}
                        </Link>
                       </li>
                     )
                 })
               }
             </ul>   
           </div>
       </div>
    )
}

export default NavHead;