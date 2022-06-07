import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import React from 'react';
import './navbar.scss';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    //cleanup
    // return () => {
    //   window.onscroll = null;
    // };
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : `navbar`}>
      <div className="container">
        <div className="left">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt=""
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <Notifications className="icon" />
          <span>My Profile</span>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
