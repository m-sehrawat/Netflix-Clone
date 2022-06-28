import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/localStorage';

const StripeSuccess = () => {
  let navigate = useNavigate();
  //Best to use Redux
  const user = getItem('user');
  const token = getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get('/subscription-status');
      console.log('Subscription Status =>', data);
      if (data && data.subscriptions.length === 0) {
        navigate('/plans');
      } else {
        navigate('/account');
      }
    };
    getSubscriptionStatus();
  }, []);
  return (
    <div>
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
        />
      </div>
    </div>
  );
};

export default StripeSuccess;
