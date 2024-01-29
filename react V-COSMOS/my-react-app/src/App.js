import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <Router>
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
              <div className='lower-text'>
                <p>Thank you for joining us on this journey towards making an impact. <br />
                Feel free to explore and engage with [Your Website Name]!
                </p>
              </div>
              <MyGlobe />
            </>
          } />
          <Route path="/insights" element={<Insights />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/login" element={<LoginSign />} />
          <Route path="/contribution" element={<Contribution />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
