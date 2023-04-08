import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      Home
      <Link to="login">
        <button>login</button>
        
      </Link>
      welcome
      {localStorage.getItem("name")}

      <button>logout</button>
    </div>
  );
}

export default Home;
