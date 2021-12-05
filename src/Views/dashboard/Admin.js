import React, {useEffect, useState, useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../../Components/Navbars/AdminNavbar.js";
import Sidebar from "../../Components/Sidebar/Sidebar.js";
import HeaderStats from "../../Shared/Navigation/Dashboard/HeaderStats";

// views
import Dashboard from "./Dashboard.js";
import BarChart from "./BarChart.js";

//Http Requests 
import { useHttpClient } from "../../Hooks/HttpRequests";

//Context
import { UserContext } from '../../context/userContext';
import {DataContext} from '../../context/dataContext';



import Swal from 'sweetalert2';
//CSS
import './dashboard.css'

export default function Admin() {
  const data = useContext(DataContext)

  const { isLoading, sendRequest } = useHttpClient();

  const postData = async(event) => {
    
    try {
      const responseData = await sendRequest(
        `https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json`);
    
      if (responseData){
        let swalAlert = await Swal.fire('Successfully processed','In record time', 'success');
        if (swalAlert.isConfirmed) {
          data.inputData(responseData)
          console.log(responseData) 
        }
        
      }
      else {
        let swalAlert = await Swal.fire('Error', "There is an issue with the request", 'error');
        if (swalAlert.isConfirmed) {
            
        }
    }
        

    } catch (e) {
      console.log(e);
      let swalAlert = await Swal.fire('Error', "An error occured, please check your network and try again", 'error');
      if (swalAlert.isConfirmed) {
        
      }
  }
  }

  useEffect(() => {
    
    postData();
  }, [])

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen dashboard__background">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
          <Route path="/admin/mention" exact component={BarChart} />
          <Route path="/admin/dashboard" exact component={Dashboard} />
          <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
