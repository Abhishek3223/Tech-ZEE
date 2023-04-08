import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate=useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        TZEE
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul >
          <li>
            <Link to="/" className="btn">HOME</Link>
          </li>
          {!localStorage.getItem("authToken") ? (
            <>
              <li>
                <Link to="/login" className="btn bg-primary">LOGIN</Link>
              </li>
              <li>
                <Link to="/" className="btn bg-success">SIGNUP</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard" className="btn">MY-DASHBOARD</Link>
              </li>
              <li>
                <button className="logout-btn btn btn-primary" onClick={handleLogout}>LOGOUT</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
