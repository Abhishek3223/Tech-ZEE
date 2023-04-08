import React from "react";
import "./dashboard.css";
import ClassForm from "../components/ClassForm";

function Dashboard() {
  const data = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("userEmail"),
    role: localStorage.getItem("role"),
    date: localStorage.getItem("dateOfJoining"),
  };
  return (
    <>
      <div className="dashouter">
        <div className="dashboard">
          <div className="profileContainer">
            <div className="profileText">
              <div className="profileTextItem">Name:{data.name}</div>
              <div className="profileTextItem">Role:{data.role}</div>
              <div className="profileTextItem">Date:{data.date}</div>
            </div>
            <div className="profileImage">
              <img src="dashboard-teacher.jpg" alt="" className="profileimg" />
            </div>
          </div>
        </div>
      </div>
      <div className="createClass">
        <h1>Create Class</h1>
        <div className="classForm">
          <ClassForm />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
