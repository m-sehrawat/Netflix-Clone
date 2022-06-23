import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './navbarMin.scss';

const NavbarMin = () => {
  return (
    <div className="navbarMin">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt=""
      />
      <div className="profile">
        <img
          src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
          alt=""
        />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};

export default NavbarMin;
