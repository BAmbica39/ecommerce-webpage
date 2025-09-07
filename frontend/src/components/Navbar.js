import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const loggedIn = !!localStorage.getItem("token");

  const isActive = (to) => (pathname === to ? "active" : "");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LEFT: Items + Cart */}
        <div className="nav-left">
          <Link to="/" className={`nav-link ${isActive("/")}`}>Items</Link>
          <Link to="/cart" className={`nav-link ${isActive("/cart")}`}>Cart</Link>
        </div>

        {/* RIGHT: Account or Logout */}
        <div className="nav-right">
          {loggedIn ? (
            <button className="btn btn-outline" onClick={logout}>Logout</button>
          ) : (
            <Link to="/login" className={`nav-link ${isActive("/login")}`}>Account</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
