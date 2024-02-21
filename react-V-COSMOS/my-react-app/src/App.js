import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card1 from './components/cards';
import SplitScreenComponent from './components/SplitScreenComponent';
import Insights from './pages/Insights';
import Latest from './pages/Latest';
import LoginSign from './pages/login_signin';
import Contribution from './pages/Contribution' ; 
import MyGlobe from './components/MyGlobe'; 
import { ColorProvider } from './ColorContext';
import LanguageSwitchButton from './components/LanguageSwitchButton';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
      <ColorProvider>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={
            
            <>
            <Header />
           
              <div className='abt'>
                <p>There is a reason why the word UNIVERSE starts with the letter 'U', <br />it's because change starts within you.</p>
              </div>
              <SplitScreenComponent />
              <div className='space'></div>
              <Card1 />
              <MyGlobe />
              <div className='lower-text'>
                <p>Thank you for joining us on this journey towards making an impact. <br />
                Feel free to explore and engage with Vishv !
                </p>
              </div>
              
            </>
          } />
          <Route path="/insights" element={<Insights />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/login" element={<LoginSign />} />
          <Route path="/contribution" element={<ProtectedRoute><Contribution /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
      </ColorProvider>
    </Router>
    </AuthProvider>
  );
}

export default App;
