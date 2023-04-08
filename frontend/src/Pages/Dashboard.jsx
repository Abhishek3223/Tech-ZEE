import React from "react";
import "./dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from '@mui/icons-material/Mail';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LogoutIcon from '@mui/icons-material/Logout';
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="user-profile">
          <div className="user-image">
            <img src="dashboard-teacher.jpg" alt="#" className="user-img" />
          </div>
          <div className="user-name">
            <h2>Ankur Yadav</h2>
          </div>
          <div className="navigation-list">
            <button>
              <DashboardIcon /> 
              Dashboard
            </button>
            <button><MailIcon/> Mail</button>
            <button><AutoStoriesIcon/>Study Materials</button>
            <button><HelpCenterIcon/>Help Centre</button>
            <button><LogoutIcon/>Logout</button>
          </div>
        </div>
        <div className="user-dash">dnf</div>
      </div>
    </>
  );
};

export default Dashboard;