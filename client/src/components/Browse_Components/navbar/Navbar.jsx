import { Search, Notifications } from '@mui/icons-material';
import React from 'react';
import './navbar.scss';
import { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Input,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
} from '@chakra-ui/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showInput, setShowInput] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    //cleanup
    // return () => {
    //   window.onscroll = null;
    // };
  };

  return (
    <Box className={isScrolled ? 'navbar scrolled' : `navbar`}>
      <Flex className="container" height={['60px', '70px']}>
        <Flex className="left">
          <Image
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt=""
            mr="40px"
          />
          <Box display={['none', 'flex']} gap="10px">
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
          </Box>
        </Flex>
        <Flex className="right" gap="30px">
          <Flex display={['none', 'flex']} gap="10px" alignItems="center">
            {showInput && <Input placeholder="Search" />}
            <Search onClick={() => setShowInput(p => !p)} />
            <Notifications />
          </Flex>
          <Flex>
            <Popover>
              <PopoverTrigger>
                <Avatar
                  src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
                  className="icon"
                  width="35px"
                  height="35px"
                />
              </PopoverTrigger>
              <PopoverContent width="120px" bg="black" color="white">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Settings</PopoverHeader>
                <PopoverHeader>Logout</PopoverHeader>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
