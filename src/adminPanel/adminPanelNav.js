import React,{useState} from "react";
import "./adminPanelNav.css";
import { Link } from 'react-router-dom';
import i18next from "i18next";
import { TwoNavPage,Navlinkoption} from "../adminPanel/adminDesingFolder/navstyle";
import manudata from "../menuInformationAll.json";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";





const AdminPanelNav = () =>{




    return(
        <TwoNavPage >
         <nav style={{height:"100%"}}>  
           <ul>
         
            <Navlinkoption>
               <h2>Dashboard</h2>
           
               {/* <img src={home}/> */}
               {
                   manudata.adminPanelInfoDashboard.map((data,index)=>{
                       return(
                           <Link key={index} to={`/admin/${data.replace( /\s/g, '')}`}>
                              <span>
                              {/* {data.icon} */}
                              
                              <div style={{width:"86%"}}>
                              {data}
                              </div>   
                             </span>
                           </Link>
                       )
                   })
               }
            </Navlinkoption>
                <Navlinkoption>
                <Link>homes</Link>
            </Navlinkoption>
           
          </ul>
         
        </nav>
        </TwoNavPage>
      
      
    )
}

export default AdminPanelNav;