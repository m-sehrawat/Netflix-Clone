import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Box, Flex } from '@chakra-ui/react';
import './footer.scss';

const footer = () => {
  return (
    <Box
      className="footer"
      color="white"
      maxW="1000"
      m="30px auto"
      p={['0px 30px', '0px']}
    >
      <Flex className="icons" color="gray" gap="40px">
        <GrFacebookOption />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </Flex>
      <Box className="links" mt="10" display={['flex', 'grid']}>
        <span>Audio and Subtitles</span>
        <span>Audio Description</span>
        <span>Help Center</span>
        <span>Gift Cards</span>
        <span>Media Center</span>
        <span>Investor Relations</span>
        <span>Jobs</span>
        <span>Terms of Use</span>
        <span>Privacy</span>
        <span>Legal Notices</span>
        <span>Cookie Preferences</span>
        <span>Corporate Information</span>
        <span>Contact us</span>
      </Box>
      <div className="service">Service Code</div>
      <div className="copyright">© 1997 - 2022 Netflix, Inc.</div>
    </Box>
  );
};

export default footer;
