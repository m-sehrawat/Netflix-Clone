import React from 'react';
import './myAccount.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Member from '../../components/MyAccount/MemberBill/Member';
import Plan from '../../components/MyAccount/Plan/Plan';

const MyAccount = () => {
  return (
    <div className="account">
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
      <div className="details">
        <div className="top1">
          <span>Account</span>
          <span>Member since February 2022</span>
        </div>
        <hr />
        <Member />
        <hr />
        <Plan />
        <hr />
      </div>
    </div>
  );
};

export default MyAccount;
