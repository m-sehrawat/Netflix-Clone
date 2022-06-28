import { Flex } from '@chakra-ui/react';
import React from 'react';
import './plan.scss';

const Plan = () => {
  return (
    <Flex
      justify="space-between"
      p="40px 0px"
      direction={['column', 'row']}
      gap={['30px', '0']}
      align={['center', '']}
    >
      <span className="quality">PLAN DETAILS</span>
      <span>
        Premium
        <span className="qualityLogo">ULTRA HD</span>
      </span>
      <span className="changePlan">Change Plan</span>
    </Flex>
  );
};

export default Plan;
