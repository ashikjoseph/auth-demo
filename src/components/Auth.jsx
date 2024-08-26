import React, { useContext, useState } from 'react';
import './styles/Auth.css';
import camImage from '../Assets/camImage.png';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';
import Header from './Header';
import { isAuthTokenContext } from '../context/ContextShare';
import Swal from 'sweetalert2';
import { Col, Row } from 'react-bootstrap';

function Auth({ register }) {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const registerForm = register ? true : false;
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userData)
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      Swal.fire({
        title: "Ooops...",
        text: "Please fill the form completely",
        icon: "info"
      });
    }
    else {
      const result = await registerAPI(userData);
      console.log(result)
      if (result.status === 200) {
        Swal.fire({
          title: "Done",
          text: "User registered successfully",
          icon: "success"
        });
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        navigate('/')
      }
      else {
        Swal.fire({
          title: "Error",
          text: result.response.data,
          icon: "error"
        });
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      Swal.fire({
        title: "Ooops...",
        text: "Please fill the form completely",
        icon: "info"
      });
    }
    else {
      const result = await loginAPI(userData);
      if (result.status === 200) {
        console.log(result)
        sessionStorage.setItem("existinguser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token)
        setIsAuthToken(true)
        Swal.fire({
          title: "Wow",
          text: "Logged in successfully",
          icon: "success"
        });
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        navigate('/dashboard')
      }
      else {
        Swal.fire({
          title: "Error",
          text: result.response.data,
          icon: "error"
        });
      }
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid auth-container">
        <Row className='d-flex justify-content-center align-items-center'>
        <Col md={6} lg={5} className="auth-left">
            {registerForm && (
              <input type="text" placeholder="Username" className="auth-input"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              />
            )}
            <input type="email" placeholder="Email" className="auth-input"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <input type="password" placeholder="Password" className="auth-input"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />

            {registerForm ? (
              <>
                <button className="auth-login-btn mt-2" onClick={handleRegister}>Register</button>
                <p className="me-2" style={{ marginTop: "10px" }}>
                  Already a user? Click here to <Link to="/" className="login primary" style={{ textDecoration: "none" }}>Login</Link>
                </p>
              </>
            ) : (
              <>
                <div className="auth-links">
                  <Link to="/register" className='auth-link' style={{ textDecoration: "none", color:"black"}}>Sign Up</Link>
                  <a href="#" className="auth-link" style={{ marginRight: "10px", color: "black" }}>Forgot Password?</a>
                </div>
                <button className="auth-login-btn" style={{ marginTop: "10px" }} onClick={handleLogin}>LOGIN</button>
                <div className="auth-or">OR</div>
                <div className="auth-icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="auth-icon-link">
                    <i className="fab fa-facebook auth-icon dimmed"></i>
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="auth-icon-link">
                    <i className="fab fa-google auth-icon"></i>
                  </a>
                  <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="auth-icon-link">
                    <i className="fab fa-apple auth-icon dimmed"></i>
                  </a>
                </div>
              </>
            )}
          </Col>
          <Col md={6} lg={5} className="auth-right">
            <img src={camImage} alt="Camera" className="auth-image img-fluid" />
            <div className="auth-label">CastME</div>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default Auth;