import React from 'react';
import './myAccount.scss';
import Member from '../../components/MyAccount/MemberBill/Member';
import Plan from '../../components/MyAccount/Plan/Plan';
import Settings from '../../components/MyAccount/Settings/Settings';
import Footer from '../../components/Browse_Components/footer/Footer';
import NavbarMin from '../../components/MyAccount/NavabarMin/NavbarMin';

const MyAccount = () => {
  return (
    <div className="account">
      <NavbarMin />
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
        <Settings />
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default MyAccount;
