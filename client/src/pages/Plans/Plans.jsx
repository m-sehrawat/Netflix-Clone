import React from 'react';
import { Tabs, TabList, Tab, Button, ButtonGroup } from '@chakra-ui/react';
import './plans.scss';
import Footer from '../../components/Browse_Components/footer/Footer';

const Plans = () => {
  return (
    <>
      <Tabs variant="unstyled">
        <TabList>
          <div className="tabs">
            <h1 className="header">Change Streaming Plan</h1>
            <Tab>
              <span>Mobile</span>
              <span>
                Good video quality in SD (480p). Watch on any phone or tablet.
                Computer and TV not
              </span>
              <span>₹ 149/month</span>
            </Tab>
            <Tab>
              <span>Basic</span>
              <span>
                Good video quality in SD (480p). Watch on any phone, tablet,
                computer or TV.
              </span>
              <span>₹ 199/month</span>
            </Tab>
            <Tab>
              <span>Standard</span>
              <span>
                Great video quality in Full HD (1080p). Watch on any phone,
                tablet, computer or TV.
              </span>
              <span>₹ 499/month</span>
            </Tab>
            <Tab>
              <span>Premium</span>
              <span>
                Our best video quality in Ultra HD (4K) and HDR. Watch on any
                phone, tablet, computer or TV.
              </span>
              <span>₹ 649/month</span>
            </Tab>
            <div>
              <div>
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our Terms of
                Use for more details.
              </div>
              <div>
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with
                Standard, and 1 with Basic and Mobile.
              </div>
            </div>
          </div>
        </TabList>
        <div className="buttons">
          <Button colorScheme="blue">Continue</Button>
          <Button colorScheme="gray">Go Back</Button>
        </div>
      </Tabs>
      <hr />
      <Footer />
    </>
  );
};

export default Plans;
