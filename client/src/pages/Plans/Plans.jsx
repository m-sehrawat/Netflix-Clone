import React from 'react';
import { Tabs, TabList, Tab, Button } from '@chakra-ui/react';
import './plans.scss';
import axios from 'axios';
import Footer from '../../components/Browse_Components/footer/Footer';
import NavbarMin from '../../components/MyAccount/NavabarMin/NavbarMin';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItem } from '../../utils/localStorage.js';

const Plans = () => {
  const [prices, setPrices] = useState([]);
  const [who, setWho] = useState(``);

  //Best to use Redux
  const user = getItem('user');
  const token = getItem('token');

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/prices');
    setPrices(data);
  };

  const handleClick = async price => {
    console.log('Ty for choosing the plan');
    setWho(price);
  };

  const dynamicDescription = price => {
    if (price.nickname === 'Basic') {
      return 'Good video quality in SD (480p). Watch on any phone, tablet, computer or TV.';
    }
    if (price.nickname === 'Mobile') {
      return 'Good video quality in SD (480p). Watch on any phone or tablet. Computer and TV not.';
    }
    if (price.nickname === 'Standard') {
      return 'Great video quality in Full HD (1080p). Watch on any phone, tablet, computer or TV.';
    }
    return 'Our best video quality in Ultra HD (4K) and HDR. Watch on any phone, tablet, computer or TV.';
  };

  async function handleSubscription() {
    console.log(user, token);
    console.log(who.id);
    if (user && token) {
      const { data } = await axios.post(
        '/create-subscription',
        {
          price: who.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.open(data);
    } else {
      // window.open('/login');
    }
  }

  return (
    <>
      <NavbarMin />
      <div className="tabs">
        <h1 className="header">Change Streaming Plan</h1>

        <Tabs defaultIndex={''}>
          <TabList style={{ flexDirection: 'column', gap: '20px' }}>
            {prices.map(price => (
              <Tab key={price.id} onClick={() => handleClick(price)}>
                <span>{price.nickname}</span>
                <span>{dynamicDescription(price)}</span>
                <span>₹ {price.unit_amount / 100}/month</span>
              </Tab>
            ))}
          </TabList>
        </Tabs>

        <div>
          <div>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our Terms of Use for
            more details.
          </div>
          <div>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </div>
        </div>
      </div>
      <div className="toPayment">
        {/* <Link to="/"> */}
        <Button
          colorScheme="blue"
          disabled={!who ? true : false}
          onClick={handleSubscription}
        >
          Continue
        </Button>
        {/* </Link> */}
        <Button colorScheme="gray">Go Back</Button>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Plans;
