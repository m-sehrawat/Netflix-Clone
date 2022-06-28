import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import './settings.scss';

const Settings = () => {
  return (
    <Flex direction={['column', 'row']} align="center" p="30px 0px">
      <Box color="gray" fontSize="20" pb="20px">
        SETTINGS
      </Box>
      <Flex
        direction="column"
        color="#0073e6"
        ml={['0px', '250px']}
        gap="10px"
        // align={['center', 'left']}
        className="settings"
      >
        <span>Test Participation</span>
        <span>Manage download devices</span>
        <span>Recent device streaming activity</span>
        <span>Sign out of all devices</span>
        <span>Download your personal information</span>
      </Flex>
    </Flex>
  );
};

export default Settings;
