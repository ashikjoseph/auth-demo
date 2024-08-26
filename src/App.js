import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { useContext } from 'react';
import { isAuthTokenContext } from './context/ContextShare';

function App() {
  const {isAuthToken, setIsAuthToken}= useContext(isAuthTokenContext)
  return (
    <div>
      <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/register' element={<Auth register={"register"}/>}/>
      <Route path='/dashboard' element={isAuthToken?<Dashboard/>:<Auth/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
