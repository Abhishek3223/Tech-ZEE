import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./startclass.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function StartClass() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };
  return (
    <div>
      {/* <Navbar/> */}
      <div className="StartClass">
        <form onSubmit={handleFormSubmit} className="startclassform">
          <div>
            <label className="fs-3">Enter Room Code</label>
          </div>
          <div className="startclassimg">
            <img className='stimage' src="131.jpg" alt="" />
          </div>
          <div>
            <input
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              type="text"
              required
              placeholder="Enter Room Code"
              className="startclassinput"
            />
          </div>
          <button className="btn bg-primary" type="submit">Enter Room</button>
        </form>

      </div>
      <Footer />

    </div>
  );
}

export default StartClass;
