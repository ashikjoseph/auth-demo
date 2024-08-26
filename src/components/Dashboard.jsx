import React, { useContext, useEffect, useState } from 'react';
import './styles/Dashboard.css';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PieChart } from '@mui/x-charts';
import { isAuthTokenContext } from '../context/ContextShare';


function Dashboard() {
  const [userName, setUserName] = useState("");
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("existinguser")) {
      const existingUserData = JSON.parse(sessionStorage.getItem("existinguser"));
      setUserName(existingUserData.username);
    }
  }, []);

  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];


  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    setIsAuthToken(false)
    navigate('/')
  }

  return (
    <>
      <Header dashboard={"dashboard"} />

      <div className="dashboard-container">
        <header className="dashboard-header text-white p-3" style={{ backgroundColor: "#ffe066" }}>
          <h2 className='mt-5 mt-3'>
            Welcome <span style={{ color: "#4a4a4a" }}>{userName}</span><span className='ms-2'>to Your Dashboard</span>
          </h2>
        </header>
        <Row>
          <Col md={3} lg={2} className="sidebar" style={{ height: "100%" }}>
            <div className="logo">
              <img src="https://i.pinimg.com/736x/14/ee/5c/14ee5c829bfbaa0b963d1ac799bb9964.jpg" alt="Company Logo" />
            </div>
            <ul className="nav-links">
              <li><Link style={{ textDecoration: "none", color: "black" }}><i className="fas fa-chart-line"></i> Analytics</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }}><i className="fas fa-tachometer-alt"></i> Performance</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black" }}><i className="fas fa-cog"></i> Settings</Link></li>
            </ul>
            <div className="logout-button " style={{ marginTop: "120px" }}>
              <button onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
            </div>
          </Col>
          <Col md={9} className='d-flex justify-content-center align-items-center' >
            <Row>
              <Col md={6}>
                <div className="chart-container ">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                </div>
              </Col>
              <Col md={6}>
                <div className="chart-container">
                  <PieChart
                    series={[
                      {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      },
                    ]}
                    height={200}
                  />
                </div>
              </Col>
            </Row>
          </Col>

        </Row>
      </div>

    </>
  );
}

export default Dashboard;
