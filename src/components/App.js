import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import FactoryManager from './FactoryManager';
import CCAdmin from './CCAdmin';
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {

  return (
    <AuthProvider>
      <Container className="d-flex algin-items-center justify-content-center" style={{mindHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path='/' element={<Dashboard />} exact></Route>
                  <Route path='/update-profile' element={<UpdateProfile />} exact></Route>
                </Route>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/factory-manager' element={<FactoryManager />}/>
                <Route path='/call-center-admin' element={<CCAdmin />}/>
                <Route path='/forgot-password' element={<ForgotPassword />}/>
              </Routes>
            </AuthProvider>
          </Router>
        </div> 
      </Container>
    </AuthProvider>
  );
}

export default App;
