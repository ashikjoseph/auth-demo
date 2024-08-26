import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ dashboard }) {
  const isDashboard = dashboard ? true : false;
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 d-flex justify-content-center align-items-center">

            {isDashboard ? (
              <>
                <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}><h5 style={{ marginTop: '6px' }}>Dashboard</h5></Link>
                <nav className="nav-links">
                  <a href="#overview">Overview</a>
                  <a href="#info">Explore</a>
                </nav>

              </>
            ) :
              (
                <>
                  <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="#info">Info</a>
                    <a href="#blog">Blog</a>
                    <a href="#about">About</a>
                  </nav>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
