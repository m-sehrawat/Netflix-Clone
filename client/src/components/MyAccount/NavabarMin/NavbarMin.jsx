import React from 'react';
// import './navbarMin.scss';
import {
  Image,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavbarMin = () => {
  return (
    <Flex
      bg="var(--main-color)"
      color="white"
      h="70px"
      justify="space-between"
      p="20px 40px"
    >
      <Link to="/">
        <Image
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
          h="100%"
        />
      </Link>
      <Flex>
        <Menu>
          <MenuButton as={Button} color="black" rightIcon={<ChevronDownIcon />}>
            My Account
          </MenuButton>
          <MenuList color="black">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Sign out of Netflix</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default NavbarMin;
