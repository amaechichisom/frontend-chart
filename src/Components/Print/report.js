import React from 'react'



//Components
import HeaderStats from "../../Shared/Navigation/Dashboard/HeaderStats";

// views
import Dashboard from "../../Views/dashboard/Dashboard";

class Report extends React.Component{
    
    render(){
    return (
        <div>
            <HeaderStats/>
            <Dashboard/>
        </div>
    )
    }
}

export default Report
