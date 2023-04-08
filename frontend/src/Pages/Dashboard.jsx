import React, { useState, useContext } from "react";
import "./dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from '@mui/icons-material/Mail';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { AllContext } from "../Context";
import Createclass from "../components/Createclass";
import DashboardArea from "../components/DashboardArea/DashboardArea";
const Dashboard = () => {

  const { setCreate, SetALlstateFalse, DasboardArea, setDasboardArea } = useContext(AllContext);
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
            <button onClick={() => { SetALlstateFalse(); setDasboardArea(true) }}>
              <DashboardIcon />
              Dashboard
            </button>
            <button><MailIcon /> Mail</button>
            <button ><AutoStoriesIcon />Study Materials</button>
            {/* <Link to='/createClass'> */}
            <button onClick={() => { setCreate(true) }}> <AutoStoriesIcon />Create class</button>
            {/* </Link> */}
            <button><HelpCenterIcon />Help Centre</button>
            <button><LogoutIcon />Logout</button>
          </div>
        </div>
        <div className="user-dash">


          <Createclass />
          {DasboardArea && <DashboardArea />}

        </div>
      </div>
    </>
  );
};

export default Dashboard;