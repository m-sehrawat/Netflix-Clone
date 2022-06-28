import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

const StripeSuccess = () => {
  // useEffect(() => {
  //   const getSubscriptionStatus = async () => {
  //     // const { data } = await axios.get('/subscription-status');
  //   };
  //   getSubscriptionStatus();
  // }, []);
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
