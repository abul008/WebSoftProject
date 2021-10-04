import React, { useState, useEffect } from 'react';    
import { useDispatch } from 'react-redux';
import {navDoNotShow} from "../componentdidmount/redux/navRedux/action";
import "./adminPanelScreen.css";
import AdminPanelNav from "./adminPanelNav"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const AdminPanelScreen = () => {

    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(navDoNotShow('/admin'))
    },[])

  return (
    <div  className="admin-wrapper">
      <Router>
        <div className="admin-panel-wrapper-cantrol">
            <AdminPanelNav/>
         admin panel
        </div>
      </Router> 
    </div>
  );
};

export default AdminPanelScreen;