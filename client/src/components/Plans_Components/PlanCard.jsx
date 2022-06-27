import React from 'react';
import { Tab, Tabs, TabList } from '@chakra-ui/react';
import './planCard.scss';
import { useState } from 'react';

const PlanCard = props => {
  function dynamicDescription(price) {
    //
  }
  const [who, setWho] = useState(`1`);
  console.log(who);

  return (
    <div>
      <Tabs defaultIndex={1}>
        <TabList>
          {props.data.map((tab, index) => (
            <Tab
              key={index}
              onClick={() => {
                setWho(index);
              }}
            >
              <span>{tab.nickname}</span>
              <span>{}</span>
              <span>₹ {tab.unit_amount / 100}/month</span>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default PlanCard;
