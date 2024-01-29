import React from 'react';
import './Header.css'; // Import your CSS file
import headerVideo from './vid2.mp4';

const Header = () => {
    return (
      <header className="video-header">
        <video autoPlay loop muted className="video-background">
          <source src={headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-text">V:Cosmos</div>
        <div className="quote-box">
          <p>How Can We Create A More Resilient Planet ?</p>
        </div>
      </header>
    );
  };
  
  export default Header;
  
  