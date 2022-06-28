import React from 'react';
import './myAccount.scss';
import axios from 'axios';
import Member from '../../components/MyAccount/MemberBill/Member';
import Plan from '../../components/MyAccount/Plan/Plan';
import Settings from '../../components/MyAccount/Settings/Settings';
import Footer from '../../components/Browse_Components/footer/Footer';
import NavbarMin from '../../components/MyAccount/NavabarMin/NavbarMin';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getItem } from '../../utils/localStorage';
import moment from 'moment';

const MyAccount = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  //BAD FEATURE
  const user = getItem('user');
  console.log('User =>', user);

  useEffect(() => {
    const getSubscription = async () => {
      const { data } = await axios.get('/subscriptions');
      console.log(data.data[0]);
      setSubscriptions(data.data[0]);
    };
    getSubscription();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <div className="account">
      <NavbarMin />
      <div className="details">
        <div className="top1">
          <span>Account</span>
          <span>Member since February 2022</span>
          <Link to="/login">
            <span onClick={logout}>Logout</span>
          </Link>
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
