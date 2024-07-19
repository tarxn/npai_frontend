import React from 'react';
import logo from '../Images/neuropixel_logo.png';
import profilePic from '../Images/avatar.png';  
import './Navbar.module.css';

const TopBar = () => {
  return (
    <div className="nav-top" style={{ backgroundColor: '#008080', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', color: 'white' }}>
      <div className="logo-section" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="NeuroPixel.AI Logo" style={{ height: '50px', marginRight: '10px' }} />
      </div>

      <div className="credits-section">
        <span>Credits 39</span>
        <button style={{ marginLeft: '20px', padding: '10px 20px', backgroundColor: 'lightblue', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Upgrade
        </button>
      </div>

      <div className="user-section" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={profilePic} alt="User Profile" style={{ height: '40px', borderRadius: '50%', marginRight: '10px' }} />
        <div>
          <span>Satheesh</span><br />
          <small>Neuropixel</small>
        </div>
        <button style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          ▼
        </button>
      </div>
    </div>
  );
};

export default TopBar;
